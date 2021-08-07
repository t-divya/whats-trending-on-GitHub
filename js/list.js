function List(mainContainer) {
  this.listEl = document.createElement("div");
  this.boxHead = document.createElement("div");
  this.boxHead.className = "box-header";
  this.listEl.append(this.boxHead);
  this.listEl.className = "listElDiv";
  this.trendingDataList = [];
  mainContainer.append(this.listEl);
}

List.prototype = {
  discoverTrend: function (dataElements) {
    this.trendingDataList = dataElements.map((dataItem) => {
      console.log(dataItem);
      return new RepoItems(this.listEl, dataItem);
    });
  },
};
