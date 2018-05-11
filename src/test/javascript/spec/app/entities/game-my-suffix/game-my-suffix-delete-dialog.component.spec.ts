/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import { JhiEventManager } from 'ng-jhipster';

import { HockeyMatchTestModule } from '../../../test.module';
import { GameMySuffixDeleteDialogComponent } from 'app/entities/game-my-suffix/game-my-suffix-delete-dialog.component';
import { GameMySuffixService } from 'app/entities/game-my-suffix/game-my-suffix.service';

describe('Component Tests', () => {
    describe('GameMySuffix Management Delete Component', () => {
        let comp: GameMySuffixDeleteDialogComponent;
        let fixture: ComponentFixture<GameMySuffixDeleteDialogComponent>;
        let service: GameMySuffixService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HockeyMatchTestModule],
                declarations: [GameMySuffixDeleteDialogComponent],
                providers: [GameMySuffixService]
            })
                .overrideTemplate(GameMySuffixDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(GameMySuffixDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(GameMySuffixService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it(
                'Should call delete service on confirmDelete',
                inject(
                    [],
                    fakeAsync(() => {
                        // GIVEN
                        spyOn(service, 'delete').and.returnValue(Observable.of({}));

                        // WHEN
                        comp.confirmDelete(123);
                        tick();

                        // THEN
                        expect(service.delete).toHaveBeenCalledWith(123);
                        expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                        expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                    })
                )
            );
        });
    });
});