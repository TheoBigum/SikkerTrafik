     //CIRKELDIAGRAM
     const values = [68.76, 31.24];
     const offset = [0];
     const omkreds = Math.PI * 100;
     let total = 0;
     values.forEach(v => total += v);
     const faktor = omkreds / total;

     console.log(omkreds, total, faktor);

     window.addEventListener("load", animer);

     function animer() {

         document.querySelectorAll("#diagram circle").forEach((cirkel, i) => {
             //            console.log(cirkel, i);
             offset.push(values[i] + offset[i]);
             console.log(offset);
             cirkel.style.strokeDasharray = values[i] * faktor + " " + omkreds;
             cirkel.style.strokeDashoffset = -offset[i] * faktor;

         })

     }
     //SØJLEDIAGRAM
     const values1 = [68, 32];

     window.addEventListener("load", animer1);

     function animer1() {

         document.querySelectorAll('#bars line').forEach((bar, i) => {
             console.log(bar, i);
             bar.setAttribute("y2", 100 - values1[i])
             bar.addEventListener("mouseover", e => {

                 document.querySelector("#disp").textContent = values1[i] + "%";

                 bar.setAttribute("data-value", values1[i]);
                 console.log(bar.dataset.value);

             })
         })
     }
