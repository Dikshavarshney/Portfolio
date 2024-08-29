/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
     
      blur: {
        '100px': '100px',
        '130px': '130px',
      },
      
      borderRadius:{
        '4xl':'250px',
        '5xl':'500px',
      },


      keyframes: {
        landing: {
          '50%': { opacity: .5},
        },
        
        home: {
          '0%': { opacity: 0},
          '50%,100': { opacity: 1},
       }
      },

      animation: {
        landing:'landing 5s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        home:'home 2s cubic-bezier(0.4, 0, 0.6, 1) 1;'
      },

      fontFamily : {
        span :"Kalnia Glaze",
        para : "Rubik Mono One",
        intro: "Chakra Petch",
        landging: "Russo One",
        novaSquare:"Nova Square",
        brunoAce:"Bruno Ace SC", 
      },   
       
      colors:{
        // home color
        pink:'#7F007F',
        blue: '#224A62',
        red:'#6D3C52',
        green:'#914632',
        // landingpage
        leftblur:"#D47C7B",
        rightblur:"#4519A0",
         
      },  
    }, 
  },
  plugins: [],
}




//durpas ke liye scale krte hai...
//gadi ki trha move krane ko translate