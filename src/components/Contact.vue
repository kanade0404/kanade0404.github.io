<template>
  <div>
    <div class="contact-info">
      <div class="contact-item twitter">
        <div>
          <span>
            <i class="fab fa-twitter"></i>
          </span>
          <a href="https://twitter.com/py_kanade">
            <span>twitter</span>
          </a>
        </div>
      </div>
      <div class="contact-item github">
        <div>
          <span>
            <i class="fab fa-github"></i>
          </span>
          <a href="https://github.com/kanade0404">
            <span>GitHub</span>
          </a>
        </div>
      </div>
      <div class="contact-item hatena">
        <div>
          <span>
            <i class="fas fa-pencil-alt"></i>
          </span>
          <a href="https://kana-kanade.hatenablog.com/">
            <span>はてなブログ</span>
          </a>
        </div>
      </div>
      <div class="contact-item email">
        <div>
          <span>
            <i class="fas fa-envelope"></i>
          </span>
          <a href="https://mail.google.com/mail/?view=cm&to=melty0404@gmail.com">
            <span>メールアドレス</span>
          </a>
        </div>
      </div>
      <div class="contact-item email">
        <div>
          <span>
            <i class="fas fa-sticky-note"></i>
          </span>
          <a href="https://scrapbox.io/pykanade/">
            <span>Scrapbox</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$sp: 480px;
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}
.contact-info {
  margin: 0 auto;
  text-align: center;
  padding-left: 60px;
  @include sp {
    padding: 0;
  }
}
.contact-item {
  font-size: 30px;
  margin: 10px;
  color: #008000;
}
</style>
