import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CoinBalanceRes } from './coin.dto';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

@Injectable()
export class CoinService {
  constructor(private readonly httpService: HttpService) {}

  async getBalance(body) {
    console.log(body);
    const { data } = await firstValueFrom(
      this.httpService
        .post<CoinBalanceRes>(`http://172.16.15.125:3000/user-balance`, body)
        .pipe(
          catchError((error: AxiosError) => {
            console.log(error);
            throw 'An error happened!';
          }),
        ),
    );

    console.log(data);
    return data;
  }
}
