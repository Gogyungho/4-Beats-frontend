import React from "react";
import MainHeader from "../../components/Headers/MainHeader/MainHeader";
import MainFooter from "../../components/Footers/MainFooter/MainFooter";
import "./Order.scss";

class Order extends React.Component {
  render() {
    return (
      <>
        <MainHeader />
        <div className="Order">
          <section className="orderHeader">
            <h2>ORDER</h2>
            <div className="currentLocation">
              <span className="this current">Order</span>
              <i className="fas fa-angle-down"></i>
              <span className="end">Order confirmed</span>
            </div>
          </section>
          <div className="tableWrap">
            <h3 className="tableTitle">Product</h3>
            <section className="productTable">
              <table>
                <thead>
                  <tr>
                    <th className="productN">Product</th>
                    <th>Color</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="productImageName">
                      <div className="infoWrap">
                        <div className="productImg">
                          <img
                            alt="Powerbeats"
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWNX2?wid=800&hei=800&fmt=jpeg&qlt=95&op_usm=0.5,1.5&fit=constrain&.v=1586808416047"
                          />
                        </div>
                        <div className="productInfo">
                          <span>Powerbeats</span>
                        </div>
                      </div>
                    </td>
                    <td className="taC productColor">
                      <div className="colorCircle2"></div>
                    </td>
                    <td className="taC productQuantity">1</td>
                    <td className="taC productPrice">$149.95</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <div className="priceBox">
              <div className="priceWrap">
                <span>Total price</span>
                <span className="totalPrice">$ 149.95</span>
              </div>
            </div>
          </div>
          <section className="howToOrder">
            <h3 className="payTitle">Payment</h3>
            <div className="checkPay">
              <div className="checkWrap">
                <div className="checkTitle">일반결제</div>
                <div className="selection">
                  <div className="checkForm">
                    <input type="radio" name="creditCard" className="radio" />
                    <span>Credit card</span>
                  </div>
                  <div className="checkForm">
                    <input type="radio" name="creditCard" className="radio" />
                    <span>Credit card</span>
                  </div>
                  <div className="checkForm">
                    <input type="radio" name="creditCard" className="radio" />
                    <span>Credit card</span>
                  </div>
                  <div className="checkForm">
                    <input type="radio" name="creditCard" className="radio" />
                    <span>Credit card</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="lastBuy">
              <div className="priceBox">
                <div className="priceWrap">
                  <span>Total price</span>
                  <span className="totalPrice">$ 149.95</span>
                </div>
              </div>
              <div className="requiredCheck"></div>
            </div>
          </section>
        </div>
        <MainFooter />
      </>
    );
  }
}

export default Order;