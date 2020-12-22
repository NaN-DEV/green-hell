const ProgressCircle = document.querySelectorAll('[data-toggle="progress-circle"]');

if (ProgressCircle.length) {



  ProgressCircle.forEach(function (elem) {


    function getCoords(heightElement) { // crossbrowser version
      const box = heightElement.getBoundingClientRect();

      const body = document.body;
      const docEl = document.documentElement;

      const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

      const clientTop = docEl.clientTop || body.clientTop || 0;
      const clientLeft = docEl.clientLeft || body.clientLeft || 0;

      const top = box.top + scrollTop - clientTop;
      const left = box.left + scrollLeft - clientLeft;

      return top;
    }

    const heightElement = getCoords(elem);
    let startProgres = true;
    const elementStart = elem;
    const heightDocument = window.screen.height;


    window.addEventListener('scroll', function () {
      let windowScroll = window.scrollY;

      if (windowScroll >= heightElement - heightDocument / 2) {
        if (startProgres) {
          startProgresAnime(elementStart);
        }
        startProgres = false;
      } else if (windowScroll <= heightElement - heightDocument / 2) {
        startProgres = true;
      }
    });


    function startProgresAnime(event) {


      const ProgressElement = event.querySelector('canvas');
      const ProgressTarget = event.dataset.target;
      const ProgressElementProcent = event.querySelector('span');
      const ProgressColor = ProgressElementProcent.getAttribute("data-color");
      const ProgressOringColor = ProgressElementProcent.getAttribute("data-progress-color");
      let c = ProgressElement.getContext('2d');


      let posX = ProgressElement.width / 2;
      let posY = ProgressElement.height / 2;
      let fps = 1000 / 200;
      let procent = 0;
      let oneProcent = 360 / 100;
      let result = oneProcent * ProgressTarget;

      ProgressElement.lineCap = 'round';

      arcMove();

      function arcMove() {
        let deegres = 0;
        let acrInterval = setInterval(function () {
          deegres += 1;
          c.clearRect(0, 0, ProgressElement.width, ProgressElement.height);
          procent = deegres / oneProcent;

          ProgressElementProcent.innerHTML = procent.toFixed();

          c.beginPath();
          c.arc(posX, posY, 100, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + 360));
          c.strokeStyle = ProgressOringColor;
          c.lineWidth = '2';
          c.stroke();

          c.beginPath();
          c.strokeStyle = ProgressColor;
          c.lineWidth = '2';
          c.arc(posX, posY, 100, (Math.PI / 180) * 270, (Math.PI / 180) * (270 + deegres));
          c.stroke();
          if (deegres >= result) clearInterval(acrInterval);
        }, fps);

      }
    }

  });
}