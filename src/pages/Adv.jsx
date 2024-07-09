import Advertisment from "../assets/Advertisment.png";
function Adv() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <img
          src={Advertisment}
          alt="Advertisement"
          style={{ maxWidth: "60%", height: "auto" }}
        />
        <div className="mt-2 text-center">
          <h1 className="text-2xl font-bold text-gray-100">
            Check Out Our Latest Offer!
          </h1>
          <p className="mt-2 text-gray-200">
            Don't miss out on our exclusive deals. Limited time only!
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adv;
