// styling
import styles from "./styles.module.scss";

// components
import { Helmet } from "react-helmet";
import SidebarTrigger from "@ui/SidebarTrigger";
import User from "./User";
import Search from "./Search";
import TruncatedText from "@components/TruncatedText";

// hooks
import { useWindowSize } from "react-use";
import { useThemeProvider } from "@contexts/themeContext";
import { useShopProvider } from "@contexts/shopContext";
import useMeasure from "react-use-measure";
import useStoreRoute from "@hooks/useStoreRoute";

// utils
import PropTypes from "prop-types";
import ThemeToggle from "@components/ThemeToggle";

const TabletHeader = ({ title }) => {
  const [ref, { width }] = useMeasure();

  return (
    <div
      className={`${styles.tablet} flex items-center justify-between px-6 py-4 gap-5 border-border border-b border-solid`}
    >
      <div className="flex items-center g-30">
        <SidebarTrigger />
        <div className="flex-1" ref={ref}>
          <TruncatedText
            className={`${styles.title} h2`}
            text={title}
            width={width}
            lines={1}
          />
        </div>
      </div>
      <Search />
      <User />
    </div>
  );
};

const DesktopHeader = ({ title }) => {
  const { width } = useWindowSize();
  const { theme, direction } = useThemeProvider();
  const { cart, setCartOpen } = useShopProvider();
  const isStoreRoute = useStoreRoute();

  return (
    <div
      className={`flex justify-between items-center ${
        theme === "dark" ? "bg-body-dark" : "bg-body-light"
      } border-border px-6 py-4 gap-5 border-b border-solid`}
    >
      {" "}
      <div className="flex items-center g-30">
        {width < 1920 && <SidebarTrigger />}
        <div className="flex-1">
          <TruncatedText
            className={`${styles.title} h2`}
            text={title}
            width={220}
            lines={1}
          />
        </div>
      </div>
      <Search />
      <div className="flex items-center">
        <div className={`flex g-30 ${direction === "rtl" ? "pl-4" : "pr-4"}`}>
          <ThemeToggle label={false} />
          {isStoreRoute && (
            <button
              className={`${styles.control} ${styles[direction]} h5`}
              onClick={() => setCartOpen(true)}
            >
              <i className="icon icon-bag-solid" />
              <span className={styles.control_indicator} />
              Cart (
              {cart.reduce(
                (total, item) => total + item.amount,
                0
              )}{" "}
              items)
            </button>
          )}
        </div>
        <User />
      </div>
    </div>
  );
};

const PageHeader = ({ title }) => {
  const { width } = useWindowSize();

  return (
    <>
      <Helmet>
        <title>{title} | Soccer AI</title>
      </Helmet>
      {width < 1280 ? (
        width < 768 ? (
          <h1 className={`${styles.title} h2`}>{title}</h1>
        ) : (
          <TabletHeader title={title} />
        )
      ) : (
        <DesktopHeader title={title} />
      )}
    </>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
