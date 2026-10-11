# Sonakshi Sharma Portfolio

A cinematic dark portfolio for a video editor and reels creator. Plain HTML, CSS and JavaScript. No build step, no paid services, works on GitHub Pages.

## Files

```
index.html          Page structure and text
style.css           Colors, fonts, layout (edit the :root block at the top)
script.js           CONFIG block at the top = all your links, projects and reels
favicon.svg         Browser tab icon (replace with your logo)
assets/
  images/           Thumbnails, project images, profile photo, hero frames
  videos/           Put 3d-showreel.mp4 here
```

## Test it on your computer

Double-clicking `index.html` works for most things. For an exact preview, open a terminal in the folder and run `python3 -m http.server 8000`, then visit http://localhost:8000.

## Where to add your content

Almost everything is in the `CONFIG` block at the top of `script.js`.

| What | What to do |
|---|---|
| Your name | Change `brand` in `CONFIG`. |
| Email | Change `email` in `CONFIG` (currently sonakshisharmaeditor@gmail.com). |
| YouTube / LinkedIn / others | Paste the full link in `social`. Empty ones stay hidden. |
| 3D video | Save your file as `assets/videos/3d-showreel.mp4`. Change `video.title`, `video.description` and `video.tools`. |
| 3D video thumbnail | Save a 1920x1080 image as `assets/images/3d-thumbnail.jpg`, then set `video.poster` in `CONFIG` and the `poster="..."` attribute in `index.html` to that path. |
| Portfolio images | Save images in `assets/images/`, then change the `image` path of each item in `projects`. Add or remove blocks freely. Keep `category` spelled exactly like an entry in `categories`. |
| Reel covers | Reel 1 uses your screenshot. For reels 2 to 4, save the cover image in `assets/images/` and change each `thumb` path. |
| Add a new reel | Copy one block in `reels` and change `title`, `category`, `url`, `thumb`. |
| Profile photo | Replace `assets/images/profile.jpg` (it is a still from your hero frames). |
| Hero animation | Uses `assets/images/hero-frames/f001.webp` to `f192.webp`. To use one still photo instead, set `hero.frames` to `0` and replace `hero-poster.jpg`. |
| Share preview image | Replace `assets/images/og-cover.jpg` (1200x630). |
| Favicon | Replace `favicon.svg`. |
| Share link metadata | In `index.html`, replace `YOUR-USERNAME` and `YOUR-REPO` in the `og:image` line after you publish. |

Image tips: use JPG or WebP, about 1200px wide, under 400 KB each. Use lowercase file names with no spaces.

### Notes on the content

- The 27.5K figure is shown as the organic reach of one featured reel, never as total account reach or followers.
- The screenshot you supplied for Reel 1 shows an eye icon next to 27.5K, which Instagram uses for views. If the number is views rather than reach, change `statNote` in `CONFIG.reels` and the metrics label in `index.html`.
- No follower counts, brand partnerships or other metrics are invented. The placeholder project names, tool names and descriptions are clearly placeholders. Replace them with your own.

## Publish for free on GitHub Pages

1. **Create the repository.** Sign in at github.com, click **New repository**, name it (for example `portfolio`), choose **Public**, and click **Create repository**.
2. **Upload the files.** On the new repository page click **uploading an existing file**. Drag in everything inside this folder (`index.html`, `style.css`, `script.js`, `favicon.svg`, `README.md` and the whole `assets` folder), then click **Commit changes**. If drag and drop skips folders, upload `assets` in parts, or use Git:
   ```
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. **Turn on Pages.** Go to **Settings > Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, Branch to **main** and folder **/ (root)**, then **Save**.
4. **Open your site.** After one to two minutes it appears at `https://YOUR-USERNAME.github.io/YOUR-REPO/`. The link also shows at the top of the Pages settings screen.
5. **Update it later.** Upload new files or edit `script.js` on GitHub (pencil icon), then commit. Changes go live in about a minute. Add a new reel by copying a block in `CONFIG.reels`. Add a new video by uploading it to `assets/videos/`.

All paths in this site are relative (no leading `/`), so it works at a project URL such as `/portfolio/`.

## Fixing common problems

- **Images or video do not load.** File names are case sensitive on GitHub. `3d-showreel.mp4` and `3D-Showreel.mp4` are different files. Match the name in `script.js` exactly, and check the folder.
- **The page looks unstyled or blank.** Make sure `index.html`, `style.css` and `script.js` are in the repository root, not inside another folder.
- **Video shows "Video not added yet".** The file is missing or misnamed at `assets/videos/3d-showreel.mp4`.
- **Video file is too large.** GitHub blocks files over 100 MB in the browser upload and warns over 50 MB. Compress it with HandBrake (H.264, MP4, 1080p, around 5 to 8 Mbps), aim for under 50 MB, or upload the video to YouTube and ask for help to switch the section to an embed.
- **Video will not play on iPhone.** Export as H.264 video with AAC audio in an `.mp4` container.
- **Changes do not appear.** Wait a minute, then hard refresh (Ctrl+Shift+R, or Cmd+Shift+R on Mac). Check the **Actions** tab to see that the deployment finished.
- **Share preview shows no image.** Set the full `og:image` address in `index.html`. Social platforms cache previews, so use their link debugger to refresh.

## Accessibility and performance

Semantic landmarks, keyboard focus styles, a skip link, labelled controls, lazy-loaded images, a reduced-motion mode that disables the hero animation, reveals and cursor effect, and a Save-Data check that skips the hero frames. The custom cursor only runs with a mouse on desktop.
