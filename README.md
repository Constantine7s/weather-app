# Weather App

Install dependencies `yarn install`

Run the app `yarn run web`

# UI Design
<table>
    <tbody>
        <tr>
            <td>
            <div style='background:#ffffff; color: black; padding:40px 0; width: 96px; text-align: center; vertical-align: center;'>#ffffff</div>
            </td>
            <td rowspan=5><img src='./ui.png' width='300px'/></td>
        </tr>
        <tr>
            <td>
            <div style='background:#0a1128; color: white; padding:40px 0; width: 96px; text-align: center; vertical-align: center;'>#0a1128</div>
            </td>
        </tr>
        <tr>
            <td>
            <div style='background:#034078; color: white; padding:40px 0; width: 96px; text-align: center; vertical-align: center;'>#034078</div>
            </td>
        </tr>
        <tr>
            <td>
            <div style='background:#1282A2; color: white; padding:40px 0; width: 96px; text-align: center; vertical-align: center;'>#1282A2</div>
            </td>
        </tr>
        <tr>
            <td>
            <div style='background:#f1f4ff; color: black; padding:40px 0; width: 96px; text-align: center; vertical-align: center;'>#f1f4ff</div>
            </td>
        </tr>
    </tbody>
</table>


# OpenWeatherMap API

## Current Weather
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={$api_key}&units=metric`

## Weather Forecast
`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid={$api_key}&units=metric`

## Weather Icons
`https://openweathermap.org/img/wn/${icon}.png`
Append @2x or @4x to icon name for higher quality image