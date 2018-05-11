import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { ITournament } from 'app/shared/model/tournament.model';

type EntityResponseType = HttpResponse<ITournament>;
type EntityArrayResponseType = HttpResponse<ITournament[]>;

@Injectable()
export class TournamentService {
    private resourceUrl = SERVER_API_URL + 'api/tournaments';

    constructor(private http: HttpClient) {}

    create(tournament: ITournament): Observable<EntityResponseType> {
        return this.http.post<ITournament>(this.resourceUrl, tournament, { observe: 'response' });
    }

    update(tournament: ITournament): Observable<EntityResponseType> {
        return this.http.put<ITournament>(this.resourceUrl, tournament, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<ITournament>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<ITournament[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }
}
