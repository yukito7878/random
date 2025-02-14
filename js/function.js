document.addEventListener("DOMContentLoaded", function() {
	const serviceItems = document.querySelectorAll(".service-item");

	serviceItems.forEach((serviceItem) => {
		const btn = serviceItem.querySelector(".btn");
		const textContainer = serviceItem.querySelector(".text-container");
		const gradient = serviceItem.querySelector(".gradient");
		const paragraph = serviceItem.querySelector(".text-container p");

		btn.addEventListener("click", function() {
			if (textContainer.style.maxHeight === "none") {
				// テキストが展開されている場合
				textContainer.style.maxHeight = "3em"; // 元の高さに戻す
				paragraph.style.display = "-webkit-box"; // 2行表示に戻す
				gradient.style.display = "block"; // ぼかしを再表示
				btn.textContent = "もっと読む"; // ボタンのテキストを変更
			} else {
				// テキストを展開する場合
				textContainer.style.maxHeight = "none"; // 高さ制限を解除
				paragraph.style.display = "block"; // 全体表示に切り替え
				gradient.style.display = "none"; // ぼかしを非表示
				btn.textContent = "閉じる"; // ボタンのテキストを変更
			}
		});
	});
});
document.addEventListener("DOMContentLoaded", function() {
	const toggleButton = document.querySelector(".jisseki__toggle-button");
	const itemsContainer = document.querySelector(".jissekiExs__items");

	toggleButton.addEventListener("click", function() {
		if (itemsContainer.classList.contains("jissekiExs__items--expanded")) {
			// 閉じる動作
			itemsContainer.classList.remove("jissekiExs__items--expanded");
			toggleButton.textContent = "もっと見る";
		} else {
			// 開く動作
			itemsContainer.classList.add("jissekiExs__items--expanded");
			toggleButton.textContent = "閉じる";
		}
	});
});

document.addEventListener("DOMContentLoaded", function() {
	const hamburger = document.querySelector(".hamburger");
	const nav = document.querySelector(".nav");

	hamburger.addEventListener("click", function() {
		nav.classList.toggle("active");
	});
});

document.addEventListener("DOMContentLoaded", function() {
	let swiper = new Swiper(".swiper-container", {
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween: 10, // ← デフォルト値を入れておく
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			type: "bullets",
			dynamicBullets: false
		},
		breakpoints: {
			1024: { slidesPerView: 5, slidesPerGroup: 5, spaceBetween: 20 },
			768: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 10 },
			480: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 2 } // ← ここで上書き
		}
	});
});


document.addEventListener("DOMContentLoaded", function() {
	const tabs = document.querySelectorAll(".tab");
	const watchItems = document.querySelectorAll(".watch-item");

	tabs.forEach(tab => {
		tab.addEventListener("click", function() {
			// すべてのタブの active クラスを削除
			tabs.forEach(t => t.classList.remove("active"));
			this.classList.add("active");

			// すべてのコンテンツを非表示にする
			watchItems.forEach(item => item.classList.remove("active"));

			// クリックしたタブの data-target に対応する要素を表示
			const targetId = this.getAttribute("data-target");
			document.getElementById(targetId).classList.add("active");
		});
	});
});

document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
		anchor.addEventListener("click", function(e) {
			e.preventDefault();
			const targetId = this.getAttribute("href").substring(1);
			const targetElement = document.getElementById(targetId);

			if (targetElement) {
				targetElement.scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			}
		});
	});
});

