import React , { useRef } from 'react';
import './MenuPage.css'; // Separate CSS file for menu page-specific styles
import Header from '../components/Header'; // Reuse the Header component from the home page

const MenuPage = () => {

  const pageContainerRef = useRef(null);

  return (
    <div className="menu-page" ref={pageContainerRef} id="menupage-container">
      <Header scrollContainer={pageContainerRef.current} />  {/* Adding the Header component */}

        <h1 className="menu-title">Our Full Menu</h1>


          {/* Appetizers Section */}
          <section className="menu-section">
            <div className="menu-genre">
              <img src="images/lebanese-food-mediterranean-cuisine-grilled-600nw-2483679877.webp" alt="Appetizers" className="menu-image" />
              <h2 className="menu-genre-name">Appetizers</h2>
            </div>
            <ul className="menu-items" id='app-anime'>
              <li>Hummus: Creamy chickpea dip served with pita bread ($7.99)</li>
              <li>Baba Ghanoush: Roasted eggplant dip with tahini sauce ($7.99)</li>
              <li>Falafel: Crispy fried balls made from chickpeas and fava beans ($8.99)</li>
              <li>Tabbouleh: Fresh parsley salad with bulgur wheat, tomatoes, and onions ($9.99)</li>
              <li>Kibbeh: Stuffed meat dumplings with pine nuts and onions ($10.99)</li>
            </ul>
          </section>
      

 
          {/* Main Courses Section */}
          <section className="menu-section">
            <div className="menu-genre">
              <img src="images/b3f83730-de2f-4c42-8a90-c6db36931820.avif" alt="Main Courses" className="menu-image" />
              <h2 className="menu-genre-name">Main Courses</h2>
            </div>
            <ul className="menu-items" id='main-anime'>
              <li>Shawarma: Marinated grilled meat served in a pita bread with hummus, tahini, and vegetables ($12.99)</li>
              <li>Kafta: Grilled ground meat kebabs served with rice and salad ($13.99)</li>
              <li>Shish Kebab: Grilled marinated skewers of meat served with rice and salad ($14.99)</li>
              <li>Lamb Biryani: Fragrant rice pilaf with lamb, vegetables, and spices ($16.99)</li>
              <li>Chicken Tikka Masala: Tender chicken marinated in yogurt and spices, served in a creamy tomato sauce ($15.99)</li>
            </ul>
          </section>


          {/* Sides Section */}
          <section className="menu-section">
            <div className="menu-genre">
              <img src="images/HF_Y23_A_R1601_W32_UK_ASD15039-3_Main_low-199a05f7.avif" alt="Sides" className="menu-image" />
              <h2 className="menu-genre-name">Sides</h2>
            </div>
            <ul className="menu-items" id='sides-anime'>
              <li>Rice: Basmati rice ($3.99)</li>
              <li>French Fries: Crispy French fries ($3.99)</li>
              <li>Grilled Vegetables: Mixed grilled vegetables ($4.99)</li>
              <li>Hummus: Creamy chickpea dip ($3.99)</li>
              <li>Baba Ghanoush: Roasted eggplant dip ($3.99)</li>
            </ul>
          </section>

          {/* Desserts Section */}
          <section className="menu-section">
            <div className="menu-genre">
              <img src="images/istockphoto-1452562396-612x612.jpg" alt="Desserts" className="menu-image" />
              <h2 className="menu-genre-name">Desserts</h2>
            </div>
            <ul className="menu-items" id='des-anime'>
              <li>Baklava: Sweet pastry layered with filo dough, nuts, and honey ($5.99)</li>
              <li>Kunafa: Cheese pastry soaked in sugar syrup and topped with pistachios ($6.99)</li>
              <li>Gulab Jamun: Deep-fried milk balls soaked in sugar syrup ($4.99)</li>
            </ul>
          </section>

          {/* Beverages Section */}
          <section className="menu-section">
            <div className="menu-genre">
              <img src="images/e525e60e33e69c252ab878afebba2c37_1200x1200.jpg" alt="Beverages" className="menu-image" />
              <h2 className="menu-genre-name">Beverages</h2>
            </div>
            <ul className="menu-items"  id='bev-anime'>

              <li>Arabic Coffee: Strong coffee brewed with cardamom ($3.99)</li>
              <li>Mint Tea: Refreshing mint tea ($2.99)</li>
              <li>Turkish Tea: Strong black tea served in small glasses ($2.99)</li>
              <li>Soft Drinks: Coca-Cola, Pepsi, Sprite ($2.99)</li>
              <li>Bottled Water: Still or sparkling ($2.99)</li>
            </ul>
          </section>

          
          {/* Hookah Flavors Section */}
          <section className="menu-section">
            <div className="menu-genre">
              <img src="images/hookah-smoking-shisha-lounge-bar-with-blurred-interior-background_967812-9987.avif" alt="Hookah Flavors" className="menu-image" />
              <h2 className="menu-genre-name">Hookah Flavors</h2>
            </div>
            <ul className="menu-items" id='hok-anime'>
              <li>Fruity: Apple, strawberry, grape, mango, blueberry</li>
              <li>Spicy: Mint, cinnamon, clove</li>
              <li>Sweet: Vanilla, chocolate, caramel</li>
              <li>Classic: Blueberry, mint, passion fruit</li>
            </ul>
          </section>
          

          {/*Timing section */}
          <section className="timing-section">
            <div className="timing-details">
              <h3>Hookah Lounge Time</h3>
              <p>OUR HOURS</p>
              <p>12 PM – 1AM  Sunday – Thursday</p>
              <p>12 PM – 2AM Friday – Saturday</p>
              <p>4800 Lawrenceville Hwy A1, Lilburn, GA 30047</p>
              <p>(678) 691-7201</p>
            </div>
          </section>
          
          {/* Copyright Section */}
          <footer className="footer-section">
            <p className="footer-text">&copy; 2024 Rozana Restaurant and Hookah Lounge. All rights reserved.</p>
            </footer>

    </div>
  );
};

export default MenuPage;

