function addIcon() {
    ethereum.enable();
    web3 = new Web3(window.ethereum);
    const tokenAddress = '';
    const tokenSymbol = 'CYBORG';
    const tokenDecimals = 18;
    const tokenImage = '';
    ethereum.request({
            method: 'wallet_watchAsset',
            params: {
            type: 'ERC20',
            options: {
                address: tokenAddress,
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: tokenImage,
            },
            },
        });
    };
