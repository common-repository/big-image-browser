<?php
/*
Plugin Name: Big image browser
Plugin URI: http://urgor.com.ua/
Description: Full screen view of images that is in topic page. Keys navigated.
Version: 1.0
Author: Alexandr OLejnik
Author URI: http://urgor.com.ua/
*/

/*
Copyright 2012  Alexandr Olejnik  (email: urgorka@gmail.com)

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

/**
 * @todo Показать подпись и/или описание изображения на увеличенном слое
 * @todo Некоторые настройки вынести в админку плагина (размер рамки, отображение текста)
 * @todo Добавить прелоадер
 * @todo Избавиться от дёргания изображения при подгрузке
 * @todo Добавить опционально дрожание изображения при смене
 * @todo BUG Изменение размера картинок для Оперы http://www.beskrovnyy.com/verstka/opredelenie-realnyx-razmerov-izobrazheniya-jquery/
 * @todo BUG Устранить влияние ВордПресс-бара на вид большого изображения
 * @todo BUG Исправить нарушение пропорций изображения при резком именении размера и/или пропорций окна/ Например при открытии-закрытии окна firebug
 */
if (!is_admin()) {
	wp_enqueue_script('jquery');
	wp_enqueue_script('bigImageBrowser_js', plugins_url('/bigImageBrowser.js', __FILE__));
	wp_enqueue_style('bigImageBrowse_css', plugins_url('/bigImageBrowser.css', __FILE__));
    }