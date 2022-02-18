function askMyName() {
   const yourname = prompt("Please enter your name", "Apinkchaya")

   if (yourname != null) {
      document.getElementById("myName").innerHTML = "My name is " + yourname
   }
}

function helloWorld() {
   const h1message = document.getElementById("myName").innerHTML;
   alert(h1message + '\nsays: มีปากก็พูดไป มีใจก็พูดมา')
}

function calAge() {
   let years = prompt("Please enter the year you were born.(in A.D.)", "ex:1990")
   alert(years)
   if (years == "ex:1990") {
      alert('อย่าตอบตามตัวอย่าง ไปทำมาใหม่ !!')
   } else {
      Number(years)
      if (isNaN.years) {
         alert('ตอบใหม่ให้หน่อย เป็นตัวเลขและเป็นค.ศ.ด้วยนะ')
      } else {
         if (years < 2021) {
            let age = 2022 - years;
            alert('ยินดีด้วย นายอยู่ในประเทศนี้มา ' + age + ' ปีแล้ว')
         } else {
            alert('ตอบใหม่ให้หน่อยยยย เป็นค.ศ.ด้วยนะ')
         }
      }

   }
}

function loadProfile() {
   const name = "Apinkchaya"
   const province = "Udonthani"
   document.getElementById("my-name").innerHTML = name
   document.getElementById("my-province").innerHTML = province
}