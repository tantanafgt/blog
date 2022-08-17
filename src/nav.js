const classesFor = (page, current) => page === current ? 'current' : ''

const menuHtml = (current) => `
<div class="nav container rounded-border">
  <ul>
    <li class="index nav_firstLevel">
      <a href="index.html" class="${classesFor('home', current)}">Home</a>
    </li>

    <li class="tarot nav_firstLevel">
      <a href="tarot.html" class="${classesFor('tarot', current)}">Tarot</a>
      <ul class="nav_secondLevel rounded-border">
        <li><a href="major.html">Major</a></li>
        <li><a href="#">Wands</a></li>
        <li><a href="#">Cups</a></li>
        <li><a href="#">Swords</a></li>
        <li><a href="#">Pentacles</a></li>
      </ul>
    </li>

    <li class="tarot nav_firstLevel">
      <a href="tarot.html" class="${classesFor('esotericism', current)}">Esotericism</a>
      <ul class="nav_secondLevel rounded-border">
        <li><a href="index.html">Prepering</a></li>
 <!--
        <li><a href="#">Astrology</a>
          <ul class="nav_thirdLevel rounded-border">
            <li><a href="major.html">Planet</a></li>
            <li><a href="#">Zodiac</a></li>
          </ul>
        </li>
        <li><a href="#">Numerology</a></li>
        <li><a href="#">Kabbalah</a></li>
-->
      </ul>
    </li>

    <li class="tarot nav_firstLevel">
      <a href="index.html" class="${classesFor('recipe', current)}">Recipe</a>
        <ul class="nav_secondLevel rounded-border">
          <li><a href="index.html">Prepering</a></li>
        </ul>
    </li>

    <li class="tarot nav_firstLevel">
      <a href="index.html" class="${classesFor('about', current)}">about</a>
    </li>
  </ul>
</div>`

getMenuHtml = (currentPage) => menuHtml(currentPage)
