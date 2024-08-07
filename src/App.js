function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="drawer">
          <h2>Корзина</h2>

          <div className="itemsBlok">
            <div className="cartItem">
              <img
                width={80}
                height={80}
                className="cartItemImg"
                src="img/logo/image 5.jpeg"
                alt=""
              />
              <div className="cartItemPodBlok">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="cartItemButton"
                width={35}
                height={35}
                src="img/logo/button56.jpg"
                alt=""
              />
            </div>

            <div className="cartItem">
              <img
                width={80}
                height={80}
                className="cartItemImg"
                src="img/logo/image 5.jpeg"
                alt=""
              />
              <div className="cartItemPodBlok">
                <p>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img
                className="cartItemButton"
                width={35}
                height={35}
                src="img/logo/button56.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="cartTotalBlok">
            <div className="cartTotalBlok1">
              <span>Итого: </span>
              <span>Налог 5%: </span>
            </div>

            <div className="cartTotalBlok2">
              <b>21 498 руб. </b>
              <b>1074 руб. </b>
            </div>
            <button className="button56">Оформить заказ <img className="strela" src="img/logo/Group-1.png" alt="" /> </button>
          </div>
        </div>
      </div>

      <header>
        <div className="headerLeft">
          <img src="img/logo/image 4.png" alt="img" />
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <div className="headerRight">
          <img width={18} height={18} src="img/logo/Group-2.svg" alt="" />
          <p className="prise">1205р</p>
          <img
            width={20}
            height={20}
            src="img/logo/zmdi_favorite-outline.svg"
            alt=""
          />
          <img width={20} height={20} src="img/logo/Union.svg" alt="" />
        </div>
      </header>

      <div className="contetnt">
        <h1>Все кроссовки</h1>

        <div className="search-blok">
          <img
            width={14.25}
            height={14.25}
            src="img/logo/Vector-4.jpeg"
            alt="изображение"
          />
          <input placeholder="Поиск..." />
        </div>
      </div>

      <div className="sneakersCard">
        <div className="card">
          <div className="favorite">
            <img height={35} width={35} src="img/logo/Group 90.jpeg" alt="" />
          </div>
          <img
            width={133}
            height={112}
            src="img/logo/image 5-5.jpeg"
            alt="изображение"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="cardButton2">
              <span>цена</span>
              <b>12 999р</b>
            </div>
            <button className="button1">
              <img
                width={11}
                height={11}
                src="img/logo/Vector-3.jpeg"
                alt="изображение"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={112}
            src="img/logo/image 5-8.jpeg"
            alt="изображение"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="cardButton2">
              <span>цена</span>
              <b>12 999р</b>
            </div>
            <button className="button1">
              <img
                width={11}
                height={11}
                src="img/logo/Vector-3.jpeg"
                alt="изображение"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={112}
            src="img/logo/image 5-6.jpeg"
            alt="изображение"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="cardButton2">
              <span>цена</span>
              <b>12 999р</b>
            </div>
            <button className="button1">
              <img
                width={11}
                height={11}
                src="img/logo/Vector-3.jpeg"
                alt="изображение"
              />
            </button>
          </div>
        </div>

        <div className="card">
          <img
            width={133}
            height={112}
            src="img/logo/image 5-7.jpeg"
            alt="изображение"
          />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardButton">
            <div className="cardButton2">
              <span>цена</span>
              <b>12 999р</b>
            </div>
            <button className="button1">
              <img
                width={11}
                height={11}
                src="img/logo/Vector-3.jpeg"
                alt="изображение"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
