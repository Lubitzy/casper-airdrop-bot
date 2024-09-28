# Casper Airdrop Bot

🚀 **Casper Airdrop Bot** 🚀 is an automation tool created for managing airdrop tasks on the Caspet Network platform

## Features

- Fetch and display user's balance information (UID, Username, balance, and position)
- Auto Complete Tasks: Automatically complete all available tasks

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Lubitzy/cspr.fans-airdrop-bot.git
   ```

2. Navigate to the project directory:

   ```
   cd cspr.fans-airdrop-bot
   ```

3. Install the required dependencies:

   ```
   npm install
   ```

4. Add "QUERY_ID" and so on into the index.js file

   ```
   Example:
   
    const TOKENS = [
    process.env.QUERY_ID_1,
    process.env.QUERY_ID_2,
    process.env.QUERY_ID_3
    ]

   ```

4. Create a `.env` file in the root directory and add your CSPR API token:

   ```
   Example:

    QUERY_ID_1=your_cspr_queryid
    QUERY_ID_2=your_cspr_queryid
    QUERY_ID_3=your_cspr_queryid

   ```

5. Start the application:

   ```
   npm start
   ```

## Usage

1. The application will display your current balance information (UID, username, balance, and position).
2. Select your account if you want to run claim tasks

The application will execute the selected actions and display the results. Detailed information about the actions performed and the rewards obtained will be shown in the console.

## Getting Your Tokens

1. **Session Storage:**
   - Open the [airdrop bot](https://t.me/csprfans_bot/csprfans?startapp=151242285).
   - Open your browser’s developer tools (usually F12 or right-click > Inspect).
   - Navigate to the **Application** tab.
   - Look for the **Session Storage** section.
   - Find and copy the key `__init__Params` value of `tgWebAppData`

## Contributing

If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## Donations

If you would like to support the development of this project, you can make a donation using the following addresses:

- **Solana**: `EFBkqR2NtoAYRhtgziTESc2PtAgaGLc8wuTmajBXdfuh`
- **EVM**: `0xE3A3B2b44e5244Eb4159101FDFD596937E54D092`
- **BTC**: `bc1pawnaeky4rks2rkq0rh2ejh3kuuavnqzhvgtckh58nsd69ncfwsssmcdtsc`

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

- **Created by:** Lubitzy
- **Telegram Information:** [Lubiqt](https://t.me/Lubiqt)
