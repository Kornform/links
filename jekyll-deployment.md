# Jekyll-Projekt installieren & starten 🚀

## **1️⃣ Repository klonen**

Zuerst das Projekt aus dem GitHub-Repository klonen:

```sh
git clone https://github.com/Kornform/links.git
cd links
```

---

## **2️⃣ Abhängigkeiten installieren**

Falls Jekyll nicht installiert ist, zuerst Jekyll und Bundler installieren:

```sh
gem install jekyll bundler
```

Dann die Projekt-Abhängigkeiten installieren:

```sh
bundle install
```

---

## **3️⃣ Jekyll-Server starten**

Das Projekt lokal ausführen mit:

```sh
bundle exec jekyll serve
```

📍 Die Website ist nun unter `http://localhost:4000` erreichbar.

---

## **4️⃣ (Optional) Probleme lösen**

Falls Fehler auftreten:

- Prüfen, ob Ruby & Gem installiert sind:
  ```sh
  ruby -v
  gem -v
  ```
- Falls Jekyll nicht erkannt wird:
  ```sh
  gem uninstall jekyll
  gem install jekyll
  ```
- Falls `bundle install` nicht funktioniert:
  ```sh
  gem update --system
  bundle install
  ```

---

## **5️⃣ Lokales Projekt in GitHub-Repository hochladen**

Falls du Änderungen an deinem Projekt vorgenommen hast und diese in das GitHub-Repository hochladen möchtest, kannst du wie folgt vorgehen:

1. **Sicherstellen, dass dein lokales Projekt die gewünschten Änderungen enthält.**
2. **Alle Änderungen zum Staging-Bereich hinzufügen:**
   ```sh
   git add .
   ```
3. **Eine Commit-Nachricht verfassen:**
   ```sh
   git commit -m "Lokale Änderungen hochgeladen"
   ```
4. **Die Änderungen in das GitHub-Repository pushen:**

   ```sh
   git push origin main
   ```

   _(Falls dein Branch anders heißt, z. B. `master` oder `develop`, passe `main` entsprechend an.)_

5. **Prüfen, ob die Änderungen auf GitHub sichtbar sind.**

---

## **✅ Fazit: Standard-Setup in Kurzform**

```sh
git clone https://github.com/Kornform/links.git
cd links
bundle install
bundle exec jekyll serve
```

---
