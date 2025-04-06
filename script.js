  <div class="container">
        <h1>Game Settings</h1>
        <form id="settingsForm">
            <div class="setting">
                <label for="theme">Theme:</label>
                <select id="theme" name="theme">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                </select>
            </div>
            <div class="setting">
                <label for="sound">Sound Effects:</label>
                <input type="checkbox" id="sound" name="sound" checked>
                <span>Enable Sound</span>
            </div>
            <div class="setting">
                <label for="music">Background Music:</label>
                <input type="checkbox" id="music" name="music">
                <span>Enable Music</span>
            </div>
            <button type="submit">Save Settings</button>
        </form>
    </div>

    <script src="script.js"></script>