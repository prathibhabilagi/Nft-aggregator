
const alchemyApiid = "plwplyMH74WLHr4VSM19T0iq1WENharo"
const alchemycontractAddress = "0x44Af0D71dF99773a57d46B08973bf118E96214ee";


const options = {method: 'GET', headers: {Accept: 'application/json'}};


export const getAlchemyNfts = async (account) => {
   
    const response = await fetch(`https://polygon-mumbai.g.alchemy.com/nft/v2/${alchemyApiid}/getNFTs?owner=${account}&contractAddresses[]=${alchemycontractAddress}&withMetadata=false`, options)
    const data = await response.json();
    return data
    };

  const contractAddress = "0xc92A02df81252caD19f82AbB6E7F8Aa3806B1f82";
  const apikey = "ckey_d5713b3178474a4ab7142522c44";

  export const getNfts = async () => {
    const response = await fetch(
      `https://api.covalenthq.com/v1/80001/tokens/${contractAddress}/nft_token_ids/?quote-currency=USD&format=JSON&key=${apikey}`
    );
    const data = await response.json();
    return data
  };

  // export const getMetadata = async (tokenID) => {
  //   const response = await fetch(
  //     `https://api.covalenthq.com/v1/80001/tokens/${contractAddress}/nft_metadata/${tokenID}/?quote-currency=USD&format=JSON&key=ckey_d5713b3178474a4ab7142522c44`
  //   );
  //   const data = await response.json();
  //   return data
  // };

  export const getMetadata = async (tokenId) => {
    const response = await fetch(`https://polygon-mumbai.g.alchemy.com/nft/v2/${alchemyApiid}/getNFTMetadata?contractAddress=${alchemycontractAddress}&tokenId=${tokenId}&refreshCache=false`, options);
    const data = await response.json();
    return data
  };



