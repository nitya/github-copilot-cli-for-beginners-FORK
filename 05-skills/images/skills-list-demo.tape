# 05-skills: Managing Skills with /skills command
# Shows /skills list and /skills info commands

Output skills-list-demo.gif

Set FontSize 18
Set Width 1000
Set Height 600
Set Theme "Dracula"
Set Padding 20
Set BorderRadius 8
Set Margin 10
Set MarginFill "#282a36"

# Human typing speed (slower for readability)
Set TypingSpeed 120ms

# Launch copilot
Type "copilot"
Enter

# Wait for copilot to start
Sleep 5s

# List all skills
Type "/skills list"
Enter

# Wait for response
Sleep 8s

# Get info about a specific skill
Type "/skills info security-audit"
Enter

# Wait for response
Sleep 8s

# Exit cleanly
Ctrl+C
Sleep 2s
