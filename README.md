# 🔢🎮 2048 Game

**2048** is a classic single-player puzzle game where the player combines numbered tiles by sliding them in four directions (up, down, left, right) to reach the elusive **2048 tile**. Each move merges tiles with the same number, doubling their value and increasing the challenge as the board fills up.

I chose to recreate the 2048 game because I’ve always loved how simple yet addictive it is. It also seemed like a fun challenge to implement using JavaScript, especially handling the tile merging logic and game-over conditions.

Here’s a preview of the game in action:

<img width="1227" height="892" alt="2048 game image" src="https://github.com/user-attachments/assets/81366923-68b0-4eea-a0ff-9d8431ba6b8f" />


## 📌 Game Features

✨ This 2048 game includes several features:

- 🎯 **Classic 2048 Mechanics**  
  Slide tiles with arrow keys (↑, ↓, ←, →) to combine matching numbers and reach 2048.

- 📈 **Live Score & Best Score Tracking**  
  Tracks the player’s score in real-time and stores the best score in local storage.

- 🌟 **New Best Score Notification**  
  When a new high score is reached, a "New Best Score! ⭐" popup briefly appears.

- 🎉 **Confetti Celebration on Win**  
  Reaching the 2048 tile triggers a confetti animation.

- 💔 **Game Over Detection**  
  If the grid fills up with no valid moves left, the game ends with a “You Lost 💔” message.

- 📖 **How to Play Instructions**  
  A dedicated popup explains the rules and controls with a clean UI.

- ♻️ **Restart Confirmation Popup**  
  If you try to restart after beating your best score, a confirmation popup warns that it won’t be saved.
  
- 🌀 **Merge Animation**  
  When two tiles merge, a smooth scaling animation highlights the event.



## 🚀 Getting Started

### 🔗 **Play the game live here:** 
[2048 Game Link]()


### 🛠️ Run the Game Locally

To play the game on your own device, follow these steps:

#### ✅ 1. Install the required tools:

- **For Windows:**
  - Install **Git Bash** (to use Git and command line):  
    [Download Git Bash](https://git-scm.com/download/win)
  - Install a code editor like **Visual Studio Code**:  
    [Download VS Code](https://code.visualstudio.com/)

- **For macOS:**
  - Open the **Terminal app** (already included in macOS)
  - Install Git (if it's not already installed):  
    [Download Git for macOS](https://git-scm.com/download/mac)
  - Install **Visual Studio Code** (recommended):  
    [Download VS Code](https://code.visualstudio.com/)

#### ✅ 2. Clone the repository:

Open your terminal (or Git Bash on Windows), and run:

```
git clone https://github.com/ayahmeftah/2048-game.git
```

#### ✅ 3. Open the project in VS Code:

- You can either open the project manually in VS Code
  **OR**
- In Git Bash / Terminal:
```
cd 2048-game
code .
```

#### ✅ 4. Run the game:
Simply open the ```index.html``` file in your browser.
- Right-click the file and select “Open with Live Server” (if using the Live Server extension in VS Code), or double-click to launch in your default browser.

### 📝 Planning materials:
- [2048 Game - Planning Document](https://docs.google.com/document/d/1MtmlmT9vYn7UBWe6s-BphcRmLJ9Xalv5t8NkNGkvDYg/edit?usp=sharing)
- [2048 Game – Trello Board](https://trello.com/b/chdpWe0g/2048-game)



## 🕹️ How to Play
- Use your **arrow keys** to move the tiles.
- When two tiles with the **same number** touch, they **merge** into one.
- Your goal is to reach the **2048 tile** , if the board gets filled and you didn't reach it, you lose.
- Your Best Score is Tracked! Restarting the game will not save your score if you beat the best.

---

## 📚 Attributions

This game was built using custom code, but the following external resources were used and deserve credit:

- 🎉 **Confetti Animation**  
  - [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) – used to show confetti when the player wins.  
- 😀 **Emojis**
  - Emojis were sourced from [Emojipedia](https://emojipedia.org/)
- ✍️ **Font**
  - [Josefin Sans](https://fonts.google.com/specimen/Josefin+Sans) from Google Fonts



## 🧠 Technologies Used
- HTML5
- CSS
- JavaScript
- Git & GitHub



## 🔮 Next Steps
Planned enhancements and stretch goals:
- ⏳ Add sliding tile animations for smoother gameplay
- 📱 Make the game mobile responsive
- 🔊 Add sound effects for tile merges, game over and winning conditions

