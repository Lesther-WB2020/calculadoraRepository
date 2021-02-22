// ESTE ES EL PUNTO DE ENTRADA DE LA APP DE ELECTRÓN.
const{app, BrowserWindow} = require('electron')
//app es como la app en si
//browserwindow es una ventana de navegador
//eventualmente todo esto requiere de electron.
function createWindow(){
    const ventana = new BrowserWindow({
        width:350,
        height:250,
        webPreferences:{
            nodeIntegration:true
        }
    })
    ventana.loadFile('index.html')
}

app.whenReady().then(createWindow)

