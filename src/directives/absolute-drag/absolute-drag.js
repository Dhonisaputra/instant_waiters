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
import { HelperProvider } from '../../providers/helper/helper';
import * as $ from "jquery";
/**
 * Generated class for the AbsoluteDragDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
var AbsoluteDragDirective = /** @class */ (function () {
    function AbsoluteDragDirective(element, renderer, domCtrl, helper) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.helper = helper;
        console.log('Hello AbsoluteDragDirective Directive');
    }
    AbsoluteDragDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (!this.helper.local.get_params('configure_table')) {
            return false;
        }
        var position = this.helper.$(this.element.nativeElement).offset();
        var w = this.helper.$(this.element.nativeElement).css('width');
        var h = this.helper.$(this.element.nativeElement).css('height');
        this.renderer.setElementStyle(this.element.nativeElement, 'position', 'absolute');
        this.renderer.setElementStyle(this.element.nativeElement, 'left', this.startLeft + 'px');
        this.renderer.setElementStyle(this.element.nativeElement, 'top', this.startTop + 'px');
        var hammer = new window['Hammer'](this.element.nativeElement);
        hammer.get('pan').set({ direction: window['Hammer'].DIRECTION_ALL });
        hammer.on('pan', function (ev) {
            console.log(ev);
            _this.handlePan(ev);
        });
        this.e = $(this.element.nativeElement);
        this.toolbarHeight = $('[ion-header]').css('height');
        this.isHorizontal = $(this.e[0]).is('[absolute-drag-horizontal]');
        this.isVertical = $(this.e[0]).is('[absolute-drag-vertical]');
    };
    AbsoluteDragDirective.prototype.handlePan = function (ev) {
        var _this = this;
        var w = this.helper.IDRtoInt(this.helper.$(this.element.nativeElement).css('width'));
        var h = this.helper.IDRtoInt(this.helper.$(this.element.nativeElement).css('height'));
        var widthBody = this.helper.IDRtoInt(this.helper.$('body').css('width'));
        var position = this.helper.$(this.element.nativeElement).offset();
        var newLeft = ev.center.x - ev.target.parentElement.getBoundingClientRect().left - (w / 2);
        var newTop = ev.center.y - ev.target.parentElement.getBoundingClientRect().top + h;
        newLeft = newLeft + w >= widthBody ? widthBody - w : newLeft;
        newLeft = newLeft < 0 ? 0 : newLeft;
        /*if(this.reduceRight)
        {
            newLeft = newLeft - this.reduceRight;
        }

        if(this.reduceBottom)
        {
            newTop = newTop - this.reduceBottom;
        }*/
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
        __metadata("design:paramtypes", [ElementRef, Renderer, DomController, HelperProvider])
    ], AbsoluteDragDirective);
    return AbsoluteDragDirective;
}());
export { AbsoluteDragDirective };
//# sourceMappingURL=absolute-drag.js.map