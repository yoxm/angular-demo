import { HeroService } from "./../hero.service";
import { Hero } from "./../Hero";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute, // ActivatedRoute 保存着到这个 HeroDetailComponent 实例的路由信息。
    //这个组件对从 URL 中提取的路由参数感兴趣。 其中的 id 参数就是要现实的英雄的 id。
    private heroService: HeroService,
    private location: Location //一个 Angular 的服务，用来与浏览器打交道。 //稍后，你就会使用它来导航回上一个视图。
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
}
