var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, Input, ElementRef, Renderer } from '@angular/core';
import { DomController } from 'ionic-angular';
import * as $ from "jquery";
/**
 * Generated class for the AbsoluteDragDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var AbsoluteDragDirective = /** @class */ (function () {
    function AbsoluteDragDirective(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        console.log('Hello AbsoluteDragDirective Directive');
    }
    AbsoluteDragDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');
        console.log(this.startLeft, this.startTop);
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
        hammer.on('pan', function (ev) {
            _this.handlePan(ev);
        });
        this.e = $(this.element.nativeElement);
        this.toolbarHeight = $('[ion-header]').css('height');
        this.isHorizontal = $(this.e[0]).is('[absolute-drag-horizontal]');
        this.isVertical = $(this.e[0]).is('[absolute-drag-vertical]');
    };
    AbsoluteDragDirective.prototype.handlePan = function (ev) {
        var _this = this;
        var newLeft = ev.center.x;
        var newTop = ev.center.y;
        if (this.reduceRight) {
            newLeft = newLeft - this.reduceRight;
        }
        if (this.reduceBottom) {
            newTop = newTop - this.reduceBottom;
        }
        this.domCtrl.write(function () {
            if (_this.isHorizontal || (!_this.isHorizontal && !_this.isVertical)) {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'left', newLeft + 'px');
            }
            if (_this.isVertical || (!_this.isHorizontal && !_this.isVertical)) {
                _this.renderer.setElementStyle(_this.element.nativeElement, 'top', newTop + 'px');
            }
        });
    };
    __decorate([
        Input('startLeft'),
        __metadata("design:type", Object)
    ], AbsoluteDragDirective.prototype, "startLeft", void 0);
    __decorate([
        Input('startTop'),
        __metadata("design:type", Object)
    ], AbsoluteDragDirective.prototype, "startTop", void 0);
    __decorate([
        Input('reduceBottom'),
        __metadata("design:type", Object)
    ], AbsoluteDragDirective.prototype, "reduceBottom", void 0);
    __decorate([
        Input('reduceRight'),
        __metadata("design:type", Object)
    ], AbsoluteDragDirective.prototype, "reduceRight", void 0);
    AbsoluteDragDirective = __decorate([
        Directive({
            selector: '[absolute-drag]' // Attribute selector
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer, DomController])
    ], AbsoluteDragDirective);
    return AbsoluteDragDirective;
}());
export { AbsoluteDragDirective };
//# sourceMappingURL=absolute-drag.js.map