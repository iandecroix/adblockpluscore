/*
 * This file is part of Adblock Plus <https://adblockplus.org/>,
 * Copyright (C) 2006-2017 eyeo GmbH
 *
 * Adblock Plus is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * Adblock Plus is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Adblock Plus.  If not, see <http://www.gnu.org/licenses/>.
 */

"use strict";

mergeInto(LibraryManager.library, {
  GetFunctionName__asm: true,
  GetFunctionName__sig: [],
  GetFunctionName: function(buffer, ptr, signature)
  {
    var table = eval("FUNCTION_TABLE_" + AsciiToString(signature));
    var name = table[HEAP32[ptr >> 2] % table.length].name;
    if (buffer)
      writeAsciiToMemory(name, buffer, true);
    return name.length;
  }
});
