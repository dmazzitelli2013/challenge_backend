import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { etherscanConfig } from '../../config/config';

@Injectable()
export class EtherscanService {
  async getOldestTransactionDate(address: string): Promise<Date> {
    const fullUrl =
      etherscanConfig.apiUrl +
      '/api?' +
      'module=account' +
      '&action=txlist' +
      '&page=1' +
      '&offset=1' +
      '&sort=asc' +
      '&apikey=' +
      etherscanConfig.apiKey +
      '&address=' +
      address;

    const request = axios({
      method: 'get',
      timeout: 3000,
      url: fullUrl,
    }).then((response) => {
      if (
        'status' in response.data &&
        response.data.status == '1' &&
        'result' in response.data &&
        Array.isArray(response.data.result) &&
        response.data.result.length > 0
      ) {
        const oldestTransaction = response.data.result[0];
        const date = new Date(parseInt(oldestTransaction.timeStamp) * 1000);
        return date;
      }
      return null;
    });

    return request;
  }
}
