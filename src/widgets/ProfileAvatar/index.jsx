import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { toast } from "react-toastify";

import Spring from "@components/Spring";
import LazyImage from "@components/LazyImage";
import Submenu from "@ui/Submenu";
import useFileReader from "@hooks/useFileReader";
import useSubmenu from "@hooks/useSubmenu";
import userPic from "@assets/user.webp";
import placeholder from "@assets/placeholder.webp";
import styles from "./styles.module.scss";
import { profile } from "@features/users/userSlice";
import { useUpdateUserProfileMutation } from "@api/UserProfle/userProfileApi";
import { ClipLoader } from "react-spinners";

const ProfileAvatar = () => {
  const userId = useSelector((state) => state.user?.user?.uid);
  const profileData = useSelector((state) => state.user?.profile);

  const dispatch = useDispatch();

  const [updateUserProfile] = useUpdateUserProfileMutation();
  const [loading, setLoading] = useState(false);

  const { anchorEl, open, handleClick, handleClose } = useSubmenu();
  const { file, setFile } = useFileReader();
  const inputRef = useRef(null);

  const triggerInput = () => inputRef.current?.click();

  const handleUpdateAvatar = async (avatarUrl) => {
    try {
      const updatedProfileData = {
        Avatar: avatarUrl,
      };

      if (profileData?.phone) {
        updatedProfileData.Phone = profileData.phone;
      }

      const result = await updateUserProfile({
        userId,
        profileData: updatedProfileData,
      }).unwrap();

      await dispatch(profile(result.data));
      toast.success("User profile image updated successfully!");
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error("Failed to update profile");
    }
  };

  const handleUpload = async (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    setLoading(true);

    const storage = getStorage();
    const storageRef = ref(storage, `avatars/${userId}`);
    const uploadTask = uploadBytesResumable(storageRef, uploadedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Upload failed:", error);
        setLoading(false);
        toast.error("Failed to upload avatar");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await handleUpdateAvatar(downloadURL);
          setLoading(false);
        });
      }
    );
  };

  const submenuActions = [
    {
      label: "Upload",
      icon: "upload",
      onClick: triggerInput,
    },
    {
      label: "Remove",
      icon: "trash",
      onClick: () => setFile(placeholder),
    },
  ];

  return (
    <Spring className={`${styles.card} card card-padded`}>
      <h3 className={styles.title}>My Profile</h3>
      <div className={`${styles.container} flex items-center`}>
        <div className={styles.wrapper}>
          <input type="file" onChange={handleUpload} ref={inputRef} hidden />
          <div>
            <LazyImage
              className={styles.img}
              src={file ? file : profileData?.Avatar || userPic}
              alt="My Avatar"
            />
          </div>
          <button
            className={styles.button}
            onClick={handleClick}
            aria-label="Open menu"
          >
            {loading ? (
              <ClipLoader size={20} color={"#ffffff"} />
            ) : (
              <i className="icon-camera" />
            )}
          </button>
          <Submenu
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            actions={submenuActions}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-overflow" style={{
            maxWidth: "160px"
          }}>
            {profileData?.Name || "Anonymous User"}
          </h3>
          {profileData?.country && (
            <span className="text-12">{`${
              profileData?.city ? `${profileData?.city}, ` : ""
            }${profileData?.country}`}</span>
          )}
          <span>
            {profileData?.Country
              ? `${profileData?.City ? `${profileData?.City?.label}, ` : ""}${
                  profileData?.Country?.label
                }`
              : "Not registered"}
          </span>
        </div>
      </div>
    </Spring>
  );
};

export default ProfileAvatar;
