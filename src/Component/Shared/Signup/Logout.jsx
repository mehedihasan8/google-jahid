import { GoogleLogout} from "react-google-login";

const clientId ="647740597373-ql9trbvgo0bmo3ma4m0nmcsv3l2g014u.apps.googleusercontent.com";

const Logout = () => {
    const onSuccess=()=>{
        
    }
    return (
        <div id="signOutButton">
      <GoogleLogout
  clientId={clientId}
  buttonText={"Logout"}
  onLogoutSuccess={onSuccess}
/>
    </div>
    );
};

export default Logout;