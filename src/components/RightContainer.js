import "./RightContainer.css";
const RightContainer = () => {
  return (
    <div className="rightContainer">
      <h1>REGISTER</h1>
      <h2>IT'S COMPLETELY FREE</h2>
      <div className="formGroup">
        <label htmlFor="Name">NAME</label>
        <input type="text" id="Name" placeholder="Your full name" />
      </div>
      <div className="formGroup">
        <label htmlFor="Username">USERNAME</label>
        <input type="text" id="Username" placeholder="Username" />
      </div>
      <div className="formGroup">
        <label htmlFor="Email">EMAIL</label>
        <input type="email" id="Email" placeholder="Email adress" />
      </div>
      <div className="formGroup">
        <label htmlFor="Password">PASSWORD</label>
        <input type="text" id="Password" placeholder="*****" />
      </div>
      <div className="formGroup">
        <label htmlFor="ConfirmPassword">Confirm PASSWORD</label>
        <input type="text" id="ConfirmPassword" placeholder="*****" />
      </div>
      <input type="checkbox" id="Checkbox" />
      <label htmlFor="Checkbox" className="speciallabel">
        Learn more about us agree for emails updates events sales agree to
        cookies
      </label>
      <button>CREATE ACCOUNT</button>
    </div>
  );
};

export default RightContainer;
