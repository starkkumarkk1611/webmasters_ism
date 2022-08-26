import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import qrcode from "qrcode-generator";

const baseURL = "http://localhost:3000/api/get_discount";
export default function Dashboard() {
  const inputCoopanRef = useRef();
  const auth = useSelector((state) => state.auth);
  const [valid, setValid] = useState(false);
  const [couponId, setCouponID] = useState("");
  var [money, setMoney] = useState(40);
  const [apply, setApply] = useState(false);
  const [applyMessage, setApplyMessage] = useState("");
  const dispatch = useDispatch();
  const [QrImg, setQrImg] = useState(null);

  useEffect(() => {
    var token = localStorage.getItem("token");
    axios
      .get("http://localhost:3000/api/getcouponId", {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setCouponID(response.data);
        var qr = qrcode(4, "L");
        qr.addData(response.data);
        qr.make();
        const qrImg = qr.createImgTag();
        document.getElementById("qr").innerHTML = qrImg;
      });
  }, []);

  const handleApply = (e) => {
    e.preventDefault();
    var givencoupon = inputCoopanRef.current.value;
    console.log(givencoupon);
    axios
      .post(baseURL, { givencoupon })
      .then((res) => {
        setMoney(money / 2);
        setApplyMessage("coupon Applied with 50% discount");
        setValid(true);
      })
      .catch((error) => {
        setApplyMessage("coupon not valid");
      });
  };
  console.log(auth);
  return (
    <div
      className="container d-flex row align-items-center justify-content-center"
      style={{ border: "2px solid red" }}
    >
      {/* <div className="card" style="width: 18rem;">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
      <div
        className="container d-flex row align-items-center justify-content-center"
        style={{ border: "2px solid red" }}
      >
        <h2 className="text-center mb-4">Your Referral Code is {couponId}</h2>
        <div id="qr" className="d-flex justify-content-center"></div>
        <div className="card mb-4" style={{ width: "20rem" }}>
          <div className="card-body">
            <h2> $ {money} </h2>
            <button className="btn btn-primary" onClick={() => setApply(true)}>
              Apply couponId
            </button>
          </div>
        </div>
      </div>
      {apply && (
        <div className="container">
          <form>
            <label htmlFor="">Apply Cuppon</label>
            <input type="text" ref={inputCoopanRef} />
            <button type="submit" onClick={handleApply}>
              Apply
            </button>
          </form>
          <div>{applyMessage}</div>
        </div>
      )}
    </div>
  );
}
