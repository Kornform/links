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

## **✅ Fazit: Standard-Setup in Kurzform**

```sh
git clone https://github.com/Kornform/links.git
cd links
bundle install
bundle exec jekyll serve
```

Falls es Fragen oder Probleme gibt, einfach melden! 😊🚀
