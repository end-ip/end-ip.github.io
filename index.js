// Random Request Generator
// Copyright (C) 2021  Soni L.
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published
// by the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

function mkrequest() {
var array = new Uint8Array(4);
window.crypto.getRandomValues(array);

var ip = array[0]+"."+array[1]+"."+array[2]+"."+array[3];

fetch("https://"+ip);
}

function startup() {
setInterval(mkrequest, 1000);
}

setTimeout(startup, 1000*60*3);
