import { RotatingLines } from "react-loader-spinner";
// import { Spinner } from "./Loader.styled";
const Loader = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <RotatingLines
        strokeColor="#f79443"
        strokeWidth="5"
        animationDuration="0.75"
        width="76"
        visible={true}
      />
    </div>
  );
};
export default Loader;
