import { IsEthereumAddress } from 'class-validator';
import IWallet from './wallet.interface';

class WalletDTO implements IWallet {
  @IsEthereumAddress()
  address: string;
}

export default WalletDTO;