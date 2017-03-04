function unanimidadChart(){var e=document.getElementById("unanimidad-chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:100}}]},legend:{display:!1}},data:{labels:["unanimidad","disconformidad"],datasets:[{label:["unanimidad","disconformidad"],data:[37.59,62.41],backgroundColor:["rgba(32, 159, 105, 0.2)","rgba(255, 99, 132, 0.2)"],borderColor:["rgba(32, 159, 105,1)","rgba(255,99,132,1)"],borderWidth:1}]}})}function repeticionChart(){var e=document.getElementById("repeticion-chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:100}}]},legend:{display:!1}},data:{labels:["PP + PSOE + C'S","ZEC + PSOE + CHA","ZEC + PSOE + C'S"],datasets:[{data:[11.31,10.58,2.5],backgroundColor:["rgba(32, 159, 105, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)"],borderColor:["rgba(32, 159, 105,1)","rgba(255,99,132,1)","rgba(54, 162, 235, 1)"],borderWidth:1}]}})}function masMocionesChart(){var e=document.getElementById("mas-mociones-chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:100}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[47,28,50,44,36],backgroundColor:["rgba(0, 128, 184,.2)","rgba(154, 22, 34,.2)","rgba(227, 6, 19,.2)","rgba(240, 122, 54,.2)","rgba(239, 176, 39,.2)"],borderColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"],borderWidth:1}]}})}function perdidoChart(){var e=document.getElementById("perdido-mociones-chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:100}}]},legend:{display:!1}},data:{labels:["unanimidad","disconformidad"],datasets:[{label:"Unanimidad",data:[50,30],backgroundColor:["rgba(32, 159, 105, 0.2)","rgba(255, 99, 132, 0.2)"],borderColor:["rgba(32, 159, 105,1)","rgba(255,99,132,1)"],borderWidth:1}]}})}function ganadoChart(){var e=document.getElementById("ganado-mociones-chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:100}}]},legend:{display:!1}},data:{labels:["unanimidad","disconformidad"],datasets:[{label:"Unanimidad",data:[50,30],backgroundColor:["rgba(32, 159, 105, 0.2)","rgba(255, 99, 132, 0.2)"],borderColor:["rgba(32, 159, 105,1)","rgba(255,99,132,1)"],borderWidth:1}]},legend:{display:!1}})}function abstenidoChart(){var e=document.getElementById("abstencion-mociones-chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:100}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[8.02,10.21,5.47,9.12,10.21],backgroundColor:["rgba(0, 128, 184,.2)","rgba(154, 22, 34,.2)","rgba(227, 6, 19,.2)","rgba(240, 122, 54,.2)","rgba(239, 176, 39,.2)"],borderColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"],borderWidth:1}]}})}function encontraChart(){var e=document.getElementById("en-contra-mociones-chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:100}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[19.7,24.08,11.31,8.02,15.32],backgroundColor:["rgba(0, 128, 184,.2)","rgba(154, 22, 34,.2)","rgba(227, 6, 19,.2)","rgba(240, 122, 54,.2)","rgba(239, 176, 39,.2)"],borderColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"],borderWidth:1}]}})}function afavorChart(){var e=document.getElementById("a-favor-mociones-chart");new Chart(e,{type:"bar",duration:3e3,easing:"easeInCubic",options:{scales:{yAxes:[{ticks:{beginAtZero:!0,mirror:!1,suggestedMin:0,suggestedMax:100}}]},legend:{display:!1}},data:{labels:["PP","ZEC","PSOE","C'S","CHA"],datasets:[{data:[35.03,28.46,46.35,45.98,36.86],backgroundColor:["rgba(0, 128, 184,.2)","rgba(154, 22, 34,.2)","rgba(227, 6, 19,.2)","rgba(240, 122, 54,.2)","rgba(239, 176, 39,.2)"],borderColor:["rgba(0, 128, 184,1)","rgba(154, 22, 34,1)","rgba(227, 6, 19,1)","rgba(240, 122, 54,1)","rgba(239, 176, 39,1)"],borderWidth:1}]}})}var width=window.innerWidth>0?window.innerWidth:screen.width;if(width>1024){var controller=new ScrollMagic.Controller;new ScrollMagic.Scene({duration:200,offset:300}).setPin("#unanimidad").addTo(controller).on("enter",unanimidadChart);var repeticion=document.getElementById("repeticion"),repeDimension=repeticion.getBoundingClientRect(),repeTop=repeDimension.top-50;new ScrollMagic.Scene({duration:200,offset:repeTop}).setPin("#repeticion").addTo(controller).on("enter",repeticionChart);var masMociones=document.getElementById("mas-mociones"),masMocionesDimension=masMociones.getBoundingClientRect(),masMocionesTop=masMocionesDimension.top-50;new ScrollMagic.Scene({duration:200,offset:masMocionesTop}).setPin("#mas-mociones").addTo(controller).on("enter",masMocionesChart);var perdidoMociones=document.getElementById("perdido-mociones"),perdidoMocionesDimension=perdidoMociones.getBoundingClientRect(),perdidoMocionesTop=perdidoMocionesDimension.top-50;new ScrollMagic.Scene({duration:200,offset:perdidoMocionesTop}).setPin("#perdido-mociones").addTo(controller).on("enter",perdidoChart);var ganadoMociones=document.getElementById("ganado-mociones"),ganadoMocionesDimension=ganadoMociones.getBoundingClientRect(),ganadoMocionesTop=ganadoMocionesDimension.top-50;new ScrollMagic.Scene({duration:200,offset:ganadoMocionesTop}).setPin("#ganado-mociones").addTo(controller).on("enter",ganadoChart);var abstenidoMociones=document.getElementById("abstenido-mociones"),abstenidoMocionesDimension=abstenidoMociones.getBoundingClientRect(),abstenidoMocionesTop=abstenidoMocionesDimension.top-50;new ScrollMagic.Scene({duration:200,offset:abstenidoMocionesTop}).setPin("#abstenido-mociones").addTo(controller).on("enter",abstenidoChart);var encontraMociones=document.getElementById("en-contra-mociones"),encontraMocionesDimension=encontraMociones.getBoundingClientRect(),encontraMocionesTop=encontraMocionesDimension.top-50;new ScrollMagic.Scene({duration:200,offset:encontraMocionesTop}).setPin("#en-contra-mociones").addTo(controller).on("enter",encontraChart);var afavorMociones=document.getElementById("a-favor-mociones"),afavorMocionesDimension=afavorMociones.getBoundingClientRect(),afavorMocionesTop=afavorMocionesDimension.top-50;new ScrollMagic.Scene({duration:200,offset:afavorMocionesTop}).setPin("#a-favor-mociones").addTo(controller).on("enter",afavorChart)}else unanimidadChart(),repeticionChart(),masMocionesChart(),perdidoChart(),ganadoChart(),abstenidoChart(),encontraChart(),afavorChart();