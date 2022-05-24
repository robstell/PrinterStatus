const puppeteer = require('puppeteer')
const path = require("path");

const isPkg = typeof process.pkg !== 'undefined';
const chromiumExecutablePath = (isPkg
  ? puppeteer.executablePath().replace(
    
      /^.*?\\node_modules\\puppeteer\\\.local-chromium/,      //<------ That is for windows users, for linux users use:  /^.*?\/node_modules\/puppeteer\/\.local-chromium/ 
      path.join(path.dirname(process.execPath), 'chromium')   //<------ Folder name, use whatever you want

    )
  : puppeteer.executablePath()
);






const open = require('open')
const page_timeout = '8000'
const http = require('http')
const host = 'localhost';
const port = 8000;






var html_top =  "<!DOCTYPE html>\n" +
                "<html lang=\"pt-BR\">\n" + 
                "<head>\n" +
                "  <title>Printer Status</title>\n" +
                "</head>\n" +
                "<body>\n" +
                "\n"

var separation = "\n\n<hr>\n"

var html_bottom = "\n" +
                  "\n</body>\n" +
                  "</html>"







const status1_constname = "COE"             //192.168.1.29
const status2_constname = "Atendimento"     //192.168.1.37
const status3_constname = "Diretoria"       //192.168.1.32
const status4_constname = "Logistica"       //192.168.1.39
const status5_constname = "Relacionamento"  //192.168.1.35
const status6_constname = "Telefonia"       //192.168.1.40
const status7_constname = "COF"             //192.168.1.30
const status8_constname = "Auditorio"       //192.168.1.31





;(async () => {


  console.log('Lendo impressoras. Aguarde...')


  const browser = await puppeteer.launch(
    {

      executablePath: chromiumExecutablePath,
      headless: true

    })




    const page = await browser.newPage()



    

    //<-----------------------------------------------------------------------------------Printer 1  (COE)
    try{
    
    await page.setDefaultNavigationTimeout(page_timeout)
    await page.goto('http://192.168.1.29/cgi-bin/dynamic/printer/PrinterStatus.html')

    console.log(`Impressora ${status1_constname}: OK`)
    var status1_name = `\n\n<h1>${status1_constname}</h1>\n`
    var status1 = await page.evaluate(() =>
      Array.from(

        document.querySelectorAll(".status_table"),
        (element) => element.outerHTML

      )
    )
   }
  catch(TimeoutError){
    
    console.log(`Sem Contato: Impressora ${status1_constname}`)
    var status1_name = `\n<h1>DESLIGADO: ${status1_constname}</h1>\n`
    var status1 = [""]

  }



    

  //<-----------------------------------------------------------------------------------Printer 2 (Atendimento)
  try{
    
    await page.setDefaultNavigationTimeout(page_timeout)
    await page.goto('http://192.168.1.37/cgi-bin/dynamic/printer/PrinterStatus.html')

    console.log(`Impressora ${status2_constname}: OK`)
    var status2_name = `\n\n<h1>${status2_constname}</h1>\n`
    var status2 = await page.evaluate(() =>
      Array.from(

        document.querySelectorAll(".status_table"),
        (element) => element.outerHTML

      )
    )
   }
  catch(TimeoutError){
    
    console.log(`Sem Contato: Impressora ${status2_constname}`)
    var status2_name = `\n<h1>DESLIGADO: ${status2_constname}</h1>\n`
    var status2 = [""]

  }



    

  //<-----------------------------------------------------------------------------------Printer 3 (Diretoria)
  try{
    
    await page.setDefaultNavigationTimeout(page_timeout)
    await page.goto('http://192.168.1.32/cgi-bin/dynamic/printer/PrinterStatus.html')

    console.log(`Impressora ${status3_constname}: OK`)
    var status3_name = `\n\n<h1>${status3_constname}</h1>\n`
    var status3 = await page.evaluate(() =>
      Array.from(

        document.querySelectorAll(".status_table"),
        (element) => element.outerHTML

      )
    )
   }
  catch(TimeoutError){
    
    console.log(`Sem Contato: Impressora ${status3_constname}`)
    var status3_name = `\n<h1>DESLIGADO: ${status3_constname}</h1>\n`
    var status3 = [""]

  }



    

  //<-----------------------------------------------------------------------------------Printer 4 (Logística)
  try{
    
    await page.setDefaultNavigationTimeout(page_timeout)
    await page.goto('http://192.168.1.39/cgi-bin/dynamic/printer/PrinterStatus.html')

    console.log(`Impressora ${status4_constname}: OK`)
    var status4_name = `\n\n<h1>${status4_constname}</h1>\n` 
    var status4 = await page.evaluate(() =>
      Array.from(

        document.querySelectorAll(".status_table"),
        (element) => element.outerHTML

      )
    )
   }
  catch(TimeoutError){
    
    console.log(`Sem Contato: Impressora ${status4_constname}`)
    status4_name = `\n<h1>DESLIGADO: ${status4_constname}</h1>\n`
    var status4 = [""]

  }



    

//<-----------------------------------------------------------------------------------Printer 5 (Relacionamento)
  try{
    
    await page.setDefaultNavigationTimeout(page_timeout)
    await page.goto('http://192.168.1.35/cgi-bin/dynamic/printer/PrinterStatus.html')

    console.log(`Impressora ${status5_constname}: OK`)
    var status5_name = `\n\n<h1>${status5_constname}</h1>\n`
    var status5 = await page.evaluate(() =>
      Array.from(

        document.querySelectorAll(".status_table"),
        (element) => element.outerHTML

      )
    )
   }
  catch(TimeoutError){
    
    console.log(`Sem Contato: Impressora ${status5_constname}`)
    var status5_name = `\n<h1>DESLIGADO: ${status5_constname}</h1>\n`
    var status5 = [""]

  }



    

  //<-----------------------------------------------------------------------------------Printer 6 (Telefonia)
  try{
    
    await page.setDefaultNavigationTimeout(page_timeout)
    await page.goto('http://192.168.1.40/cgi-bin/dynamic/printer/PrinterStatus.html')

    console.log(`Impressora ${status6_constname}: OK`)
    var status6_name = `\n\n<h1>${status6_constname}</h1>\n`
    var status6 = await page.evaluate(() =>
      Array.from(

        document.querySelectorAll(".status_table"),
        (element) => element.outerHTML

      )
    )
   }
  catch(TimeoutError){
    
    console.log(`Sem Contato: Impressora ${status6_constname}`)
    var status6_name = `\n<h1>DESLIGADO: ${status6_constname}</h1>\n`
    var status6 = [""]

  }
  


    

  //<-----------------------------------------------------------------------------------Printer 7 (COF)
   try{
    
    await page.setDefaultNavigationTimeout(page_timeout)
    await page.goto('http://192.168.1.30/cgi-bin/dynamic/printer/PrinterStatus.html')

    console.log(`Impressora ${status7_constname}: OK`)
    var status7_name = `\n\n<h1>${status7_constname}</h1>\n`
    var status7 = await page.evaluate(() =>
      Array.from(



        document.querySelectorAll(".status_table"),
        (element) => element.outerHTML
        

      )
    )
   }
  catch(TimeoutError){
    
    console.log(`Sem Contato: Impressora ${status7_constname}`)
    var status7_name = `\n<h1>DESLIGADO: ${status7_constname}</h1>\n`
    var status7 = [""]

  }
  


    

  //<-----------------------------------------------------------------------------------Printer 8 (Gerencia)
  try{
    
    await page.setDefaultNavigationTimeout(page_timeout)
    await page.goto('http://192.168.1.31/cgi-bin/dynamic/printer/PrinterStatus.html')

    console.log(`Impressora ${status8_constname}: OK`)
    var status8_name = `\n\n<h1>${status8_constname}</h1>\n`
    var status8 = await page.evaluate(() =>
      Array.from(



        document.querySelectorAll(".status_table"),
        (element) => element.outerHTML
        

      )
    )
   }
  catch(TimeoutError){
    
    console.log(`Sem Contato: Impressora ${status8_constname}`)
    var status8_name = `\n<h1>DESLIGADO: ${status8_constname}</h1>\n`
    var status8 = [""]

  }  
  


  var html = 
  
  html_top 
    + status1_name + status1[0]
    + status2_name + status2[0]
    + status3_name + status3[0]
    + status4_name + status4[0]
    + status5_name + status5[0]
    + status6_name + status6[0]
    + status7_name + status7[0]
    + status8_name + status8[0]
  + html_bottom


  console.log('\nLeitura Completa!')



  await browser.close()




  const requestListener = function (req, res) {

    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(html);

  }
  
  const server = http.createServer(requestListener);
  server.listen(port, host, () => {

    

    console.log(`Servidor rodando em http://${host}:${port}`);
    

    open('http://localhost:8000');


    //server.close()
  });  


  
  
 
})()
