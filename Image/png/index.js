peoples = [
  {
    UserName: "Hamid",
    Password: "hamid4101"
  },
  {
    UserName: "Mahmoud",
    Password: "Naeebi4576"
  },
  {
    UserName: "SalamKhan",
    Password: "SalamKhan3655"
  },
]

let Login = `
    <div id="cover">
        <h1 id="Apple">
              Apple Product
        </h1>
        <div id="font">
            <p>
              <b>
                Apple is serving you to devolop a community with the best mobile phones.
                <p> 
                  General features of Apple Mobiles (Iphones)
                </p>
                <summary>
                      <details>
                          <q>
                            Click this link to access the Apple Main site
                          </q>
                          <a href="apple.com">www.appleofficial.com</a>
                      </details>
                </summary>
              </b>
            </p>
        </div>
        <form action="" id="input">
            <label >Write your UserName:</label>
            <input type="text" id="UserName">
            <label >Enter your Password:</label>
            <input type="password" id="Password">
            <button onclick="your_login()"><b>Sign In</b></button>
        </form>
    </div>
`
document.getElementById("first").innerHTML = Login

function your_login(){
  let e_user = document.getElementById("UserName").value
  let e_pass = document.getElementById("Password").value
  for (i of peoples) {
    if (i.UserName == e_user && i.Password == e_pass){
      let nxt_page = `
      <div id="nxt_cover">
          <h1>
            Welcome ${i.UserName}
          </h1>
          <p>
            Hey ${i.UserName}, here you can visit our products or order to provide you with the right price.
          </p>
      </div>

      <div class="container">
              <img src="./image/16.jpg" alt="">
              <img src="./image/16d.jpg" alt="">
              <img src="./image/Screenshot_20250211-073224_Chrome.jpg" alt="">
              <img src="./image/Screenshot_20250211-073203_Chrome.jpg" alt="">
              <img src="./image/Screenshot_20250211-073054_Chrome.jpg" alt="">
              <img src="./image/Screenshot_20250211-072958_Chrome.jpg" alt="">
          </div>
          <button onclick="Iphone_page()" id="Iphone2000">Top Iphones</button>
      `
      document.getElementById("second_page").innerHTML = nxt_page
      break;
      
    }
    // else{
      //   alert("Your Password or UserName is invalid..")
      //   // break;
      // }
    }
  }
  function Iphone_page(){
    let Page_spe = `
    <div id="prodcuts">
          <div class="popup_header">
            <i class='bx bx-x' onclick="page_close"></i>
          </div>
          <label for="im1">IPHONE 16 Pro Max:</label>
          <h5>6.9 Display</h5>
          <h5>120Hz refresh rate</h5>
          <h5>Titanium design</h5>
          <h5>A18 chip</h5>
          <h5>Apple intelligence</h5>
          <h5>48MP Ultra Wide</h5>
          <h5>2x optical zoom</h5>
          <h5>Wi-Fi 7</h5>
          <h5>4,676mAh</h5>
          <h5>256/512GB/1TB</h5>
          <a href="../png/image/15 (2).jpg"><img src="../png/image/15 (2).jpg" alt=""></a>
          <label for="#">IPHONE 15 PRO MAX</label>
          <h5>6.7 Diisplay</h5>
          <h5>48MP Camra</h5>
          <h5>8GB RAM</h5>
          <h5>4441mAh</h5>
          <h5>Ceramic Shield</h5>
          <h5>Chipset Apple A17 Pro (3nm)</h5>
          <h5>Selfie Camera 12MP</h5>
          <h5>Video 4k</h5>
          <a href=""><img src="../png/image/15.jpg" alt=""></a>
      </div>
    `
    document.getElementById("second_page").innerHTML = Page_spe
  }
  
  function page_close() {
    document.getElementById("prodcuts").classList.remove("second_page")
  } 
  
  
  







