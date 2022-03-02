<FlatList
  ListHeaderComponent={
    <View style={{ marginBottom: 20 }}>
      <Progress complete={data[0].complete} overall={data[0].overall} />
      {/* {props.complete == props.overall ? (
              <ButtonCustom buttonText={props.buttonText} style={{ backgroundColor: THEME.PURPLE, marginBottom: 10 }} onClick={gotoCert} />
            ) : null} */}
      <CourseDesc description={data[0].courseDesc} />
      <Text>{JSON.stringify(data)}</Text>
      <Text>{JSON.stringify(data[0].lessons)}</Text>
      <Text>{data[0].complete}</Text>
      {/* <Text>{Object.entries(modules.map((a) => a.content)).toString()}</Text> */}
    </View>
  }
  contentContainerStyle={{ justifyContent: "flex-start" }}
  keyExtractor={(item) => item.lessonId.toString()}
  data={lessonsData}
  style={stylesContainer.container}
  renderItem={(item) => (
    <View style={{ borderWidth: 1, borderColor: "#bbb", padding: 5, marginBottom: 5, backgroundColor: "#f2f2f2", borderRadius: 10 }}>
      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          <DisplayMedium>Урок {i++}</DisplayMedium>
          <DisplayMedium style={{ fontSize: 18 }}>{item.lessonDesc}</DisplayMedium>
        </View>
        {isComplete ? (
          <Image source={require("../../assets/img/checked-icon.png")} style={{ padding: 5 }}></Image>
        ) : (
          <Image source={require("../../assets/img/thinking-icon.png")} style={{ margin: 5 }}></Image>
        )}
      </TouchableOpacity>
    </View>
    // <ModuleExpandable
    //   id={item.id}
    //   title={item.title}
    //   bookmarked={item.bookmarked}
    //   complete={item.complete}
    //   overall={item.overall}
    //   content={item.content}
    // />
  )}
/>;
