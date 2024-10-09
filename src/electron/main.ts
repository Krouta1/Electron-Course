import { app, BrowserWindow } from "electron";
import path from "path";

// type test = string;

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Load the index.html of the app no matter where the app is running from
  mainWindow.loadFile(path.join(app.getAppPath(), "/dist-react/index.html"));
});
