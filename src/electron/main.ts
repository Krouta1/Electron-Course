import { app, BrowserWindow } from "electron";
import path from "path";
import { isDevelopment } from "./util.js";

// type test = string;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (isDevelopment()) {
    // Load the index.html of the app from the vite server
    mainWindow.loadURL("http://localhost:5213");
  } else {
    // Load the index.html of the app no matter where the app is running from
    mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
  }
});
