# Jekyll-Projekt auf einem Server bereitstellen 🚀

## **1️⃣ Lokales Projekt builden**

Bevor die Website auf den Server hochgeladen wird, muss sie mit Jekyll generiert werden:

```sh
bundle exec jekyll build
```

📍 Die statische Website wird nun im Verzeichnis `_site/` erstellt.

---

## **2️⃣ Deployment über FTP-Client (Manuelle Methode)**

Falls du die Dateien manuell hochladen möchtest, kannst du einen FTP-Client wie **FileZilla** oder **WinSCP** verwenden.

### **Anleitung mit FileZilla:**

1. Öffne **FileZilla** und verbinde dich mit dem Server:

   - **Server**: Deine Server-Adresse (z. B. `ftp.mein-server.com`)
   - **Benutzername**: Dein FTP-Benutzername
   - **Passwort**: Dein FTP-Passwort
   - **Port**: `21` für FTP oder `22` für SFTP (empfohlen)

2. Navigiere im **lokalen Dateibrowser** zu deinem Jekyll-Projekt und öffne den Ordner `_site/`.

3. Im **entfernten Dateibrowser** navigiere zum Verzeichnis, in dem die Website auf dem Server gehostet werden soll (z. B. `/var/www/html`).

4. Ziehe alle Dateien aus `_site/` in das Zielverzeichnis auf dem Server.

5. Nach dem Upload kannst du die Website in deinem Browser aufrufen:  
   `http://deine-domain.com`

---

## **3️⃣ Automatisiertes Deployment mit SCP (Sichere Methode)**

Falls du das Deployment automatisieren möchtest, kannst du ein einfaches Bash-Skript nutzen:

### **Skript für automatisches Deployment** (`deploy.sh`):

```sh
#!/bin/bash

# Einstellungen
SERVER_USER="username"
SERVER_HOST="your-server.com"
SERVER_PATH="/var/www/html"

# Lokales Projekt builden
bundle exec jekyll build

# Dateien auf den Server kopieren
scp -r _site/* $SERVER_USER@$SERVER_HOST:$SERVER_PATH

echo "🚀 Deployment abgeschlossen! Die Website ist jetzt live."
```

### **Verwendung des Skripts:**

1. Erstelle die Datei `deploy.sh` in deinem Projektverzeichnis.
2. Mache sie ausführbar mit:
   ```sh
   chmod +x deploy.sh
   ```
3. Führe das Skript aus:
   ```sh
   ./deploy.sh
   ```

Nach der Ausführung werden die Dateien automatisch auf den Server hochgeladen.

---

## **✅ Fazit: Deployment-Optionen**

| Methode        | Vorteile                                              | Nachteile                                           |
| -------------- | ----------------------------------------------------- | --------------------------------------------------- |
| **FTP-Client** | Einfach, GUI-basiert, keine Terminal-Kenntnisse nötig | Manuelles Hochladen bei jeder Änderung erforderlich |
| **SCP-Skript** | Automatisch, sicher, schneller Upload                 | Erfordert SSH-Zugriff und Terminal-Kenntnisse       |

Wähle die Methode, die für dich am besten passt. 😊🚀
