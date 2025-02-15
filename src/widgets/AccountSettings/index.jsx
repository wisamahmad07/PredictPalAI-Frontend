// components
import Spring from '@components/Spring';
import Profile from '@widgets/AccountSettings/Profile';

const AccountSettings = () => {
    return (
        <Spring className="card h-full flex flex-col justify-between  card-padded">
            <h3>Account Settings</h3>
            <div className="flex flex-col justify-between">
                {/* <Tabs value={activeTab}>
                    <TabsList className={`${styles.tabs_list} tab-nav col-2`}>
                        <TabButton title={width >= 375 ? 'Edit Profile' : 'Profile'}
                                   onClick={() => setActiveTab('profile')}
                                   active={activeTab === 'profile'}/>
                        <TabButton title={width >= 375 ? 'Basic settings' : 'Basic'}
                                   onClick={() => setActiveTab('basic')}
                                   active={activeTab === 'basic'}/>
                    </TabsList>
                    <TabPanel value="profile">
                        <Fade in={activeTab === 'profile'} timeout={400}>
                            <div>
                                <Profile/>
                            </div>
                        </Fade>
                    </TabPanel>
                    <TabPanel value="basic">
                        <Fade in={activeTab === 'basic'} timeout={400}>
                            <div>
                                <Profile/>
                            </div>
                        </Fade>
                    </TabPanel>
                </Tabs> */}
                <Profile/>
            </div>
        </Spring>
    )
}

export default AccountSettings