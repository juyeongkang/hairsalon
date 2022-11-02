
function start(){
  this.setup = function(){
    clickS = new Clickable();
      clickS.image = letter;
      clickS.fitImage = true;
      clickS.imageScale = 1;
      clickS.locate(65, 550);
      clickS.resize(500,500);
      clickS.onHover = function () {
        clickS.imageScale = 1.1;
        }
      clickS.onOutside = function () {
        clickS.imageScale = 1;
      }
       clickS.onRelease = function(){
         scn.showScene(salonenter);
         hover.play();
       }
  }

  this.draw = function()
      {
         image(cover,0,0,width,height);
         clickS.draw();
      }
}

function salonenter()  {
  this.setup = function(){
    click1 = new Clickable();
      click1.image = mp3player;
      click1.fitImage = true;
      click1.imageScale = 1;
      click1.locate(30, 560);
      click1.resize(200,200);
      click1.onHover = function () {
        click1.imageScale = 0.5;
        }
      click1.onOutside = function () {
        click1.imageScale = 0.4;
      }
       click1.onRelease = function(){
         bgm.play();
       }

       click2 = new Clickable();
         click2.image = clock;
         click2.fitImage = true;
         click2.imageScale = 1;
         click2.locate(400, 160);
         click2.resize(260,200);
         click2.strokeWeight = 0;
         click2.onHover = function () {
           click2.imageScale = 0.5;
           }
         click2.onOutside = function () {
           click2.imageScale = 0.4;
         }
          click2.onRelease = function(){
            clocksound.play();
          }

          click3 = new Clickable();
            click3.image = customer;
            click3.fitImage = true;
            click3.imageScale = 1;
            click3.locate(600, 470);
            click3.resize(300,380);
            click3.onHover = function () {
              click3.imageScale = 1.1;
              }
            click3.onOutside = function () {
              click3.imageScale = 1.0;
            }
             click3.onRelease = function(){
               yawn.play();
             }

             click4 = new Clickable();
               click4.image = desk;
               click4.fitImage = true;
               click4.imageScale = 1;
               click4.locate(820, 450);
               click4.resize(400,480);
               click4.onHover = function () {
                 click4.imageScale = 0.7;
                 }
               click4.onOutside = function () {
                 click4.imageScale = 0.6;
               }
                click4.onRelease = function(){
                  desksound.play();
                }

             click7 = new Clickable();
               click7.image = hairdressor;
               click7.fitImage = true;
               click7.imageScale = 1;
               click7.locate(380, 380);
               click7.resize(300,480);
               click7.onHover = function () {
                 click7.imageScale = 1.1;
                 }
               click7.onOutside = function () {
                 click7.imageScale = 1;
               }
                click7.onRelease = function(){
                  haircut.play();
                }

                click8 = new Clickable();
                  click8.image = light;
                  click8.fitImage = true;
                  click8.imageScale = 1;
                  click8.locate(800, 30);
                  click8.resize(200,200);
                  click8.strokeWeight = 0;
                  click8.color = "clear";
                  click8.onHover = function () {
                    click8.imageScale = 0.95;
                    }
                  click8.onOutside = function () {
                    click8.imageScale = 0.8;
                  }
                   click8.onRelease = function(){
                     lightsound.play();
                   }

  }

    this.enter = function()  {

    }

this.draw = function()
    {
       image(mainbg,0,0,width,height);
       click1.draw();
       click2.draw();
       click3.draw();
       click4.draw();
       click7.draw();
       click8.draw();
    }
}
