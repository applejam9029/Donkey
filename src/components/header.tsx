import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import i18n from "i18next"

export const Header: React.FC<{ lang: string; isIndex: boolean }> = ({
  lang,
  isIndex,
}) => {
  return (
    <div className="max-w-md sm:mx-auto text-gray-0 dark:text-gray-100 flex flex-col sm:flex-row">
      {isIndex ? (
        <h1 className="text-xl font-bold">
          <Link to={`/${i18n.language}`}>Donkey</Link>
        </h1>
      ) : (
        <span className="text-xl font-bold">
          <Link to={`/${i18n.language}`}>Donkey</Link>
        </span>
      )}
      <div className="ml-auto">
        <label>
          <span className="mr-1">{i18n.t("LangSwitchLabel")}</span>
          <select
            defaultValue={lang}
            onChange={e => navigate("/" + e.target.value)}
            className="px-2 py-1 rounded-sm text-secondary-200 bg-gray-600 ring-secondary-400 focus:ring-2"
          >
            <option value="en">English</option>
            <option value="ja">日本語</option>
          </select>
        </label>
      </div>
    </div>
  )
}

export default Header
