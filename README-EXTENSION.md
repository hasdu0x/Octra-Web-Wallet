# Octra Web Wallet Chrome Extension

This is the Chrome extension version of the Octra Web Wallet, providing a convenient popup interface for managing your Octra blockchain wallet directly from your browser.

## Features

- 🔐 Secure wallet generation and import
- 💰 Real-time balance checking
- 📤 Transaction sending (redirects to full interface for complex operations)
- 📄 Transaction history viewing
- 🌙 Dark/Light theme support
- 🔒 Local storage using Chrome's secure storage API

## Building the Extension

### Prerequisites

Make sure you have Node.js and npm installed on your system.

### Build Steps

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Build the extension**:
   ```bash
   npm run build:extension
   ```

   Or manually:
   ```bash
   node build-extension.js
   ```

3. **The built extension will be in the `dist-extension` folder**

### Development Mode

For development with auto-rebuild:
```bash
npm run dev:extension
```

## Installing the Extension

1. **Open Chrome** and navigate to `chrome://extensions/`

2. **Enable Developer Mode** by toggling the switch in the top right corner

3. **Click "Load unpacked"** button

4. **Select the `dist-extension` folder** from your project directory

5. **The extension should now appear** in your Chrome extensions list and toolbar

## Using the Extension

1. **Click the Octra wallet icon** in your Chrome toolbar
2. **Create a new wallet** or **import an existing one** using your private key or mnemonic phrase
3. **View your balance** and recent transactions in the popup
4. **For sending transactions**, click "Open Full Send Interface" to use the complete web interface
5. **Access transaction history** and detailed wallet information

## Extension Structure

```
dist-extension/
├── manifest.json          # Extension manifest
├── popup.html             # Popup HTML
├── popup.js              # Main popup script
├── popup.css             # Styles
├── icons/                # Extension icons
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
└── assets/               # Additional assets
```

## Security Features

- **Local Storage**: Wallet data is stored securely using Chrome's storage API
- **No External Dependencies**: All cryptographic operations happen locally
- **Secure Communication**: API calls to Octra network use HTTPS
- **Permission-Based**: Only requests necessary permissions

## Permissions Used

- `storage`: For securely storing wallet data locally
- `activeTab`: For basic tab interaction
- `https://octra.network/*`: For communicating with the Octra blockchain

## Development Notes

### Key Differences from Web Version

1. **Storage**: Uses Chrome storage API instead of localStorage
2. **Size Constraints**: Optimized for 400x600px popup window
3. **Navigation**: Complex operations open in new tabs
4. **Theme Persistence**: Theme settings stored in Chrome storage

### File Structure

- `src/extension/`: Extension-specific components
- `manifest.json`: Chrome extension manifest
- `popup.html`: Extension popup HTML
- `vite.config.extension.ts`: Vite config for extension build
- `build-extension.js`: Build script for packaging

## Troubleshooting

### Common Issues

1. **Extension not loading**: Make sure Developer Mode is enabled
2. **Icons not showing**: Verify icon files are in `public/icons/`
3. **API errors**: Check network connectivity and CORS settings
4. **Build failures**: Ensure all dependencies are installed

### Debug Mode

1. Right-click the extension icon and select "Inspect popup"
2. Use Chrome DevTools to debug the extension
3. Check the Console tab for error messages

## Publishing to Chrome Web Store

To publish this extension to the Chrome Web Store:

1. **Create a developer account** at [Chrome Web Store Developer Dashboard](https://chrome.google.com/webstore/devconsole/)
2. **Zip the `dist-extension` folder**
3. **Upload the zip file** through the developer dashboard
4. **Fill in the required metadata** (description, screenshots, etc.)
5. **Submit for review**

## Security Considerations

- Never share your private keys or mnemonic phrases
- Always verify transaction details before confirming
- Keep your extension updated to the latest version
- Use strong passwords and enable 2FA where possible

## Support

For issues and support:
- Check the main project README
- Open an issue on the project repository
- Verify you're using the latest version

## License

This extension follows the same license as the main Octra Web Wallet project.