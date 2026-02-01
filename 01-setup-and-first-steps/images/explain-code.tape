# 01-setup-and-first-steps: Explain Confusing Code
# Auto-generated from demos.json - Real copilot execution

Output explain-code-demo.gif

Set FontSize 18
Set Width 1000
Set Height 600
Set Theme "Dracula"
Set Padding 20
Set BorderRadius 8
Set Margin 10
Set MarginFill "#282a36"

# Human typing speed
Set TypingSpeed 60ms

# Launch copilot
Type "copilot"
Enter

# Wait for copilot to start
Sleep 5s

# Execute the prompt
Type "Explain this in simple terms: const debounce = (fn, ms) => { let t; return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); }; }"
Enter

# Wait for response
Sleep 25s

# Exit cleanly
Ctrl+C
Sleep 2s
