/*
Put your header HTML between the backticks below and it will auto-populate on all pages of this local copy.
*/

const headerHTML = `<a href="index.html"><h1>Turn on the Light</h1></a>
<p>a semi-private post-potter site set in 2007</p>
<div class="header--info">
    <div class="header--calendar">
        <b class="calendar-month">March 2007</b>
        <!-- days -->
        <span class="calendar-day cal-day">S</span>
        <span class="calendar-day cal-day">M</span>
        <span class="calendar-day cal-day">T</span>
        <span class="calendar-day cal-day">W</span>
        <span class="calendar-day cal-day">T</span>
        <span class="calendar-day cal-day">F</span>
        <span class="calendar-day cal-day">S</span>
          
        <!-- starting empty days -->
        
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        
        <!-- actual days -->
        <span>1</span>
        <span class="event" title="Quidditch Championship R19">2</span>
        <span class="event" title="Quidditch Championship R19, Gryffindor Vs Ravenclaw, Full Moon, Lunar Eclipse">3</span>
        <span class="event" title="Quidditch Championship R19, Lunar Eclipse">4</span>
        <span>5</span>
        <span>6</span>
        <span>7</span>
        <span>8</span>
        <span class="event" title="Quidditch Championship R20">9</span>
        <span class="event" title="Quidditch Championship R20, Hogsmeade trip">10</span>
        <span class="event" title="Quidditch Championship R20">11</span>
        <span>12</span>
        <span>13</span>
        <span>14</span>
        <span>15</span>
        <span class="event" title="Australian Grand Prix">16</span>
        <span class="event" title="St Patrick's Day, Australian Grand Prix">17</span>
        <span class="event" title="Australian Grand Prix">18</span>
        <span>19</span>
        <span>20</span>
        <span>21</span>
        <span>22</span>
        <span class="event" title="Quidditch Championship R21" n="">23</span>
        <span class="event" title="Quidditch CHampionship R21, Ravenclaw Vs Slytherin">24</span>
        <span class="event" title="Quidditch Championship R21">25</span>
        <span>26</span>
        <span>27</span>
        <span>28</span>
        <span>29</span>
        <span class="event" title="Bahrain Grand Prix">30</span>
        <span class="event" title="Bahrain Grand Prix">31</span>
    </div>
    <div class="header--staff">
        <a href="?showuser=1" class="hufflepuff">H</a>
        <a href="?showuser=305" class="ravenclaw">R</a>
        <a href="?showuser=309" class="slytherin">S</a>
        <a href="profile.html" class="gryffindor">G</a>
    </div>
</div>`;

document.querySelector('body > header').innerHTML = headerHTML;
