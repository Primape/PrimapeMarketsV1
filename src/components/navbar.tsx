import { ConnectButton, lightTheme } from "thirdweb/react";
import { client } from "@/app/client";
import { defineChain } from "thirdweb/chains";
import { inAppWallet, createWallet } from "thirdweb/wallets";

// Define wallets array outside the component
const wallets = [
    inAppWallet({
        auth: {
            options: [
                "google",
                "discord",
                "telegram",
                "farcaster",
                "email",
                "x",
                "passkey",
                "phone",
                "github",
                "twitch",
                "coinbase",
                "apple",
                "line",
                "facebook",
            ],
        },
    }),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
    createWallet("io.rabby"),
    createWallet("io.zerion.wallet"),
];

export function Navbar() {
    return (
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">Primape Market</h1>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full font-semibold">BETA</span>
            </div>
            <ConnectButton 
                client={client} 
                theme={lightTheme()}
                chain={defineChain(33139)}
                wallets={wallets}
                connectModal={{
                    size: "compact",
                    title: "Primapes Markets",
                    showThirdwebBranding: false,
                }}
                connectButton={{
                    style: {
                        fontSize: '0.75rem !important',
                        height: '2.5rem !important',
                    },
                    label: 'Sign In',
                }}
                accountAbstraction={{
                    chain: defineChain(33139),
                    sponsorGas: true,
                }}
            />
        </div>
    );
}
